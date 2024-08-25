import { createAction, props } from "@ngrx/store";
import { Ialbum } from "../models/album.model";


export const getAlbumsAction = '[Album] get albums'


export const ALBUM_BREFIX = '[Album]';
// get albums
export const getAlbums = createAction(getAlbumsAction);
export const getAlbumSuccess = createAction(`${getAlbums.type} success`, props<{payload: Ialbum[] }>())
export const getAlbumsFailure = createAction(`${getAlbums.type} fail`, props<{ error: string }>())


// delete album by id
export const deleteAlbum = createAction(`${ALBUM_BREFIX} delete album`, props<{ id: string }>());
export const deleteAlbumSuccess = createAction(`${deleteAlbum.type} success`, props<{ album: Ialbum }>())
export const deleteAlbumsFailure = createAction(`${deleteAlbum.type} fail`, props<{ error: string }>())

// update album