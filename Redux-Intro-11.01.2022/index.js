import store from "./reduxStore/index";
import { increment, decrement } from "./reduxStore/counter";
import { addTask, removeTask } from "./reduxStore/tasks";
import {
  addPost,
  addUpVote,
  removePost,
  updatePost,
  addComment,
  removeComment,
  removeUserComment,
  addDownVote,
} from "./reduxStore/posts";

//store
store.subscribe(() => console.log(store.getState())); //her işlem olduğunda güncel durumu gösterir

// store.dispatch(increment());
// store.dispatch(increment(10));
// store.dispatch(decrement());
// store.dispatch(decrement(100));
// store.dispatch(addTask(1, "nur"));
// store.dispatch(addTask(2, "genc"));
// store.dispatch(removeTask(2));

store.dispatch(addPost(1, "deneme"));
// store.dispatch(addPost(2, "hello"));
// store.dispatch(removePost(2));
// store.dispatch(updatePost(1, "deneme2"));
store.dispatch(addComment(2, 1, "nice post"));
store.dispatch(addComment(3, 2, "bad post"));

// store.dispatch(removeComment(1));
store.dispatch(removeUserComment(2));
// store.dispatch(addDownVote(1));

// store.dispatch(addUpVote(1));
// console.log(store.getState().posts[0].votes);
console.log(store.getState().posts[2].comments);
