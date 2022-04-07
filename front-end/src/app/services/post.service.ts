import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  getAll(): Observable<Post[]>{
    return this.https.get<Post[]>("http://localhost:8090/posts");
  }

  getUserPosts(id: number): Observable<Post[]>{
    return this.https.get<Post[]>("http://localhost:8090/posts/"+id);
  }

  get3UserPosts(id: number): Observable<Post[]>{
    return this.https.get<Post[]>("http://localhost:8090/posts/top/"+id);
  }

  getPost(id: number): Observable<Post>{
    return this.https.get<Post>("http://localhost:8090/post/"+id);
  }

  post(data: FormData): Observable<Post>{
    return this.https.post<Post>("http://localhost:8090/post", data);
  }

//TODO: This function requires a backend change, wait before using it
  deletePost(id: number): Observable<boolean>{
    return this.https.delete<boolean>("http://localhost:8090/post/"+id);
  }

  constructor(private https: HttpClient) { }
}
