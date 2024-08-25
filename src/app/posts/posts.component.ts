import { Component, OnInit } from '@angular/core';
import { Ipost } from './models/post.model';
import { Store } from '@ngrx/store';
import { IAppState } from './store/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { DeleteAction, GetPostsStart, editAction } from './store/posts.action';
import { getPosts } from './store/posts.selectors';
import { Ialbum } from './models/album.model';
import { getAlbums } from './new-store/album.action';
import { IAppState2 } from './new-store/storev2';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Ipost[] = [];
  albums: Ialbum[] = []
  // state?:BehaviorSubject<Iposts[]>

  constructor(private store: Store<IAppState2>) { }

  ngOnInit(): void {
    // this.store.dispatch(new GetPostsStart());
    // this.store.select(getPosts).subscribe(
    //   {
    //     next: (data) => this.posts = data
    //   }
    // )

    this.store.dispatch(getAlbums());
    this.store.select("albums").subscribe(
      {
        next: (albumsState) => {
          // console.log( albumsState);
          this.albums = albumsState.albums
        },
        error:()=>{}
      }
    )

    // this.store.select("postsSlice")
    // .subscribe({
    //   next: (postsState) => {
    //       // debugger
    //       console.log(postsState)
    //       this.posts = postsState.posts;
    //     },
    //     // error: () => { }
    //   }
    //   )


    // this.store.dispatch(getPostsSuccess());

  }

  deleteAlbum(id:number){

  }
  updateAlbum(id:number){

  }
  // deletePost(index: number) {
  //   this.store.dispatch(new DeleteAction(index))
  //   // console.log()
  // }

  // updatePost(index: number) {
  //   let dummyObj: Ipost = {
  //     ...this.posts[index],
  //     title: "hello from nesma's device",
  //     body: "testing"
  //   }
  //   this.store.dispatch(new editAction({ index, updatedPost: dummyObj }));

  // }


}
