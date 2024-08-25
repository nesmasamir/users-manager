import { createReducer, on } from "@ngrx/store";
import { Ialbum } from "../models/album.model";
import { getAlbumSuccess, getAlbums } from "./album.action";


export interface IAlbumState {
    albums: Ialbum[],
    isLoading: boolean,
    error: string
}

export const initialState: IAlbumState = {
    albums: [],
    isLoading: false,
    error: ''
}


export const albumReducer = createReducer(initialState,
    on(getAlbums, state => ({ ...state, isLoading: true })),
    on(getAlbumSuccess, (state, {payload}) => {
        console.log(state)
        console.log(payload)
        return {
            ...state,
            albums: payload,
            isLoading: false,
            error: ''

        }
    })


)
