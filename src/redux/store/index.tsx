import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { NotifReducer } from "../reducer/NotifReducer";

const reducers = combineReducers({
  notif: NotifReducer
});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
  )
);

export default store;

export type StoreType = ReturnType<typeof reducers>;
export const useReduxState: TypedUseSelectorHook<StoreType> = useSelector;
