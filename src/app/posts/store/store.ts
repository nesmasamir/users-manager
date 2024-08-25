import { ActionReducerMap } from "@ngrx/store";
import { IpostsState, postsReducer } from "./posts.reducer";
import { PostsEffects } from "./posts.effects";

export interface IAppState {
    postsSlice: IpostsState
}

export const appReducer: ActionReducerMap<IAppState> = { postsSlice: postsReducer };
 export const appEffects=[PostsEffects];


// export const appReducer= { postsSlice: postsReducer }