import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import reducers from "../reducers";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(createLogger());
}

const store = createStore(reducers, applyMiddleware(compose(...middleware)));

export default store;
