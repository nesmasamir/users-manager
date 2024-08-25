import { ActionReducerMap } from "@ngrx/store";
import { IUsersState, usersReducer } from "./users.reducers";
import { UsersEffects } from "./users.effects";


export interface IAppState3 {
    usersData: IUsersState;
}


export const appReducers3: ActionReducerMap<IAppState3> = { usersData: usersReducer };
export const appEffects3=[UsersEffects]; 