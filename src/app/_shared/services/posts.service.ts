import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../globalConfig/app-settings';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  
  constructor(private httpClient: HttpClient) { }

  postPosts(post: any){
    return this.httpClient.post<any>(AppSettings.POSTS, post , AppSettings.httpOptions)
    .pipe(map((data) => {
      console.log(data);
        return data;
    }));
  }
  getPosts(){
    return this.httpClient.get<any>(AppSettings.POSTS , AppSettings.httpOptions)
    .pipe(map((data) => {
      console.log(data);
        return data;
    }));
  }
  getPost(id){
    return this.httpClient.get<any>(AppSettings.POSTS + `${id}`  , AppSettings.httpOptions)
    .pipe(map((data) => {
      console.log(data);
        return data;
    }));
  }
  putPost(id, post){
    return this.httpClient.put<any>(AppSettings.POSTS + `${id}`, post  , AppSettings.httpOptions)
    .pipe(map((data) => {
      console.log(data);
        return data;
    }));
  }
  deletePost(id){
    return this.httpClient.delete<any>(AppSettings.POSTS + `${id}`  , AppSettings.httpOptions)
    .pipe(map((data) => {
      console.log(data);
        return data;
    }));
  }
}
