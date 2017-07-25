import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';

import rootReducer from './reducers/rootReducer';
import comments from './data/comments';
import posts from './data/posts'

const defaultState = {
  posts,
  comments
};

export const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(hashHistory, store);
