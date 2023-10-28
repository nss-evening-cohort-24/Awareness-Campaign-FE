import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getAllPosts = async () => {
  try {
    const response = await fetch('https://localhost:7136/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error fetching posts');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching posts: ${error.message}`);
  }
};

const getSinglePost = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/post/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const createPost = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch(reject);
});

const updatePost = (payload, postId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/post/${postId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deletePost = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/post/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
};
