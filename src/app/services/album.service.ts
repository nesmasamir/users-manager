import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ialbum } from '../posts/models/album.model';
import { Ipost } from '../posts/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAlbums() {
    return this.http.get<Ialbum[]>('https://jsonplaceholder.typicode.com/albums');
  }

  deletAlbum(id: string) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }
  updateAlbum(id: string, album: Ialbum) {
    return this.http.put(`https://jsonplaceholder.typicode.com/albums/${id}`, album)
  }
}

