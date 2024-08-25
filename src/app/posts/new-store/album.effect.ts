import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createAction } from "@ngrx/store";
import { AlbumService } from "src/app/services/album.service";
import { getAlbumSuccess, getAlbumsAction, getAlbumsFailure } from "./album.action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class albumsEffects {
    constructor(private actions: Actions, private albumsService: AlbumService) { }
    // getAlbums$ = createEffect(() => this.actions
    //     .pipe(
    //         ofType(getAlbumsAction),
    //         switchMap(() => this.albumsService.getAlbums()
    //             .pipe(
    //                 map(albums => ({ type: getAlbumSuccess.type, payload: albums }))
    //                 ,catchError(err => of(({ type: getAlbumsFailure.type, payload: err })))
    //             )
    //         )
    //     ))

}