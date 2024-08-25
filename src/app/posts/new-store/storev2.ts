import { ActionReducerMap } from "@ngrx/store";
import { IAlbumState, albumReducer } from "./album.reducer";
import { albumsEffects } from "./album.effect";

export interface IAppState2 {
    albums: IAlbumState
}

export const appReducer2: ActionReducerMap<IAppState2> = {
    albums: albumReducer
}

export const appEffects2=[albumsEffects]