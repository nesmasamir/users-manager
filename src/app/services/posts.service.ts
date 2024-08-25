import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipost } from '../posts/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  endPoint: string = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { }

  getPosts() {
     return this.http.get<Ipost[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
