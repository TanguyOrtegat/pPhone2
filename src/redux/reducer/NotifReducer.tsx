import { ADD_NOTIF, INotifActions, REMOVE_NOTIF } from "../action/NotifAction";

export interface INotif {
  message: string;
  id: number;
}

const initialState: Array<INotif> = [];

export const NotifReducer = (state: INotif[] = initialState, action: INotifActions) => {
  switch (action.type) {
    case ADD_NOTIF:
      return [...state, action.payload];
    case REMOVE_NOTIF:
      return state.filter(i => i.id !== action.payload.id);
    default:
      return state;
  }
};
