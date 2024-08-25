import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, } from "@ngrx/effects";
import { PostsService } from "src/app/services/posts.service";
import { GetPostsSuccess, LOAD_POSTS_START,  } from "./posts.action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class PostsEffects {
    constructor(private action: Actions, private postsService: PostsService) { }



    // getPosts$ = createEffect(() => this.action.pipe(
    //     ofType(loadposts),
    //     switchMap(() => this.postsService.getPosts()
    //         .pipe(
    //             map(posts => ({ type: getPostsSuccess.type, payload: posts })),
    //             catchError(err => of({ type: getPostsfailuer.type, payload: err }))

    //         )
    //     )
    // ))
    getPosts$ = createEffect(() => this.action.pipe(
        ofType(LOAD_POSTS_START),
        switchMap(() => this.postsService.getPosts()
            .pipe(
                map(posts => {
                    return new GetPostsSuccess({posts:posts})
                }),
                // catchError(err => of({ type: getPostsfailuer.type, payload: err }))

            )
        )
    ))



}

// function Effect(arg0: { dispatch: boolean; }): (target: PostsEffects, propertyKey: "") => void {
//     throw new Error("Function not implemented.");
// }
