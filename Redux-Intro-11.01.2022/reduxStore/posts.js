//{id, title, comments: [{id: 1,userId: 1, comment: "d"}], {votes: {up: 0, down: 0}}}

import { v4 as uuidv4 } from "uuid";

//action Types
//ADD_POST, REMOVE_POST(id), UPDATE_POST(id, title), ADD_COMMENT(id, userId, comment), REMOVE_COMMENT(id), REMOVE_USER_COMMENTS(userId), ADD_UP_VOTE(id), ADD_DOWN_VOTE(id)

const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const UPDATE_POST = "UPDATE_POST";
const ADD_COMMENT = "ADD_COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";
const REMOVE_USER_COMMENTS = "REMOVE_USER_COMMENTS";
const ADD_UP_VOTE = "ADD_UP_VOTE";
const ADD_DOWN_VOTE = "ADD_DOWN_VOTE";

//action CREATORS
export const addPost = (title) => ({
  type: ADD_POST,
  payload: { id: uuidv4(), title, comments: [], votes: { up: 0, down: 0 } },
});

export const removePost = (id) => ({
  type: REMOVE_POST,
  payload: id,
});

export const updatePost = (id, title) => ({
  type: UPDATE_POST,
  payload: { id, title },
});

export const addComment = (postId, userId, comment) => ({
  type: ADD_COMMENT,
  payload: { postId, userId, comment },
});

export const removeComment = (id) => ({
  type: REMOVE_COMMENT,
  payload: id,
});

export const removeUserComment = (userId) => ({
  type: REMOVE_USER_COMMENTS,
  payload: userId,
});

export const addUpVote = (id) => ({
  type: ADD_UP_VOTE,
  payload: id,
});

export const addDownVote = (id) => ({
  type: ADD_DOWN_VOTE,
  payload: id,
});
// ADD_POST, REMOVE_POST(id), UPDATE_POST(id, title), ADD_COMMENT(id, userId, comment), REMOVE_COMMENT(id), REMOVE_USER_COMMENTS(userId), ADD_UP_VOTE(id), ADD_DOWN_VOTE(id)
//reducer
const postReducer = (posts = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...posts, action.payload];
    case REMOVE_POST:
      return posts.filter((item) => item.id !== action.payload);
    case UPDATE_POST:
      return posts.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, title: item.title + " " + action.payload.title };
        }
        return item;
      });
    case ADD_COMMENT:
      return posts.map((item) => {
        if (item.postId === action.payload.postId) {
          // return {
          //   ...item,
          //   comments: [
          //     { id: item.comments.length + 1, userId, comment },
          //     ...item.comments,
          //   ],
          // };
          item.comments = [{ id: uuidv4(), userId, comment }, ...item.comments];
        }
        return item;
      });
    case REMOVE_COMMENT:
      return posts.filter((item) => item.id !== action.payload);
    case REMOVE_USER_COMMENTS:
      return posts.filter((item) => item.userId !== action.payload);
    case ADD_UP_VOTE:
      return posts.map((item) => {
        if (item.id === action.payload) {
          // if süslü parantezi...
          //return { ...item, votes: { ...item.votes, up: item.votes.up + 1 } }; //obje
          //item.votes = { ...item.votes, up: item.votes.up + 1 };
          item.votes.up = item.votes.up + 1;
        }
        return item;
      });
    case ADD_DOWN_VOTE:
      return posts.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            votes: { ...item.votes, down: item.votes.down - 1 },
          };
        }
        return item;
      });
    default:
      return posts;
  }
};

export default postReducer;
