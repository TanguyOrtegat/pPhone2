import { ThunkAction } from "redux-thunk";
import { INotif } from "../reducer/NotifReducer";

// interfaces
type ResultThunk<T> = ThunkAction<T, INotif, undefined, INotifActions>;
// action types
export const ADD_NOTIF = "ADD_NOTIF";
export const REMOVE_NOTIF = "REMOVE_NOTIF";

// action interfaces
export interface IAddNotif {
  type: typeof ADD_NOTIF;
  payload: {
    message: string;
    id: number;
  };
}
export interface IRemoveNotif {
  type: typeof REMOVE_NOTIF;
  payload: { id: number };
}

export type INotifActions = IAddNotif | IRemoveNotif;

export const addNotif = (message: string, date: string, appName: string, appIcon: string, link: string, title?: string, timeout?: number): ResultThunk<void> => {
  return dispatch => {
    const id = Date.now();
    dispatch({
      type: ADD_NOTIF,
      payload: {
        message,
        date,
        appName,
        appIcon,
        link,
        title,
        id
      }
    });
    if (timeout) {
      setTimeout(() => {
        dispatch(removeNotif(id));
      }, timeout);
    }
  };
};

export const removeNotif = (id: number): IRemoveNotif => ({
  type: REMOVE_NOTIF,
  payload: {
    id
  }
});
