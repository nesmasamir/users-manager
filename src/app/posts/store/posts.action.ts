import { Action, createAction, props } from "@ngrx/store";
import { Ipost } from "../models/post.model";
import { IpostsState } from "./posts.reducer";

// export interface IcustomAction {
//     type: string,
//     payload: any
// }

export const DELETE_POST = "DELETE_POST";
export const EDIT_POST = "EDIT_POST";

export const LOAD_POSTS_START = "LOAD_POSTS_START";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";

export class DeleteAction implements Action {
    readonly type: string = DELETE_POST;
    payload: number;
    constructor(payload: number) {
        this.payload = payload;

    }
}

export class editAction implements Action {
    readonly type: string = EDIT_POST;
    //  payload:Omit<Ipost,"id">

    constructor(public payload: { index: number, updatedPost: Ipost }) { }
}


export class GetPostsStart implements Action {
    readonly type: string = LOAD_POSTS_START;
    constructor(){}
}
export class GetPostsSuccess implements Action {
    readonly type: string = GET_POSTS_SUCCESS
    constructor(public payload:{posts:Ipost[]}){}
}

// ///////////////////////////////////////////////////////////////////////////////////////////

// actions to effects
// export const POSTS = '[POSTS]'

// export const loadposts = createAction(`${POSTS}load`)
// export const getPostsSuccess = createAction(`${POSTS} get-data-success`, props<{ posts: Ipost[] }>);
// export const getPostsfailuer = createAction(`${POSTS} get-data-faileur`, props<{ error: string }>);

// export type PostAction = ReturnType<typeof loadposts | typeof getPostsSuccess | typeof getPostsfailuer >