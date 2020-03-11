import { Component, OnInit } from '@angular/core';
import { PostsService } from '../_shared/services/posts.service';
import { first } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AddPostDialogComponent } from './add-post-dialog/add-post-dialog.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts : any[] ;
  constructor(private postsService : PostsService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getPosts();
  }
  getPosts(){
    return this.postsService.getPosts().pipe(first()).subscribe((data) => {
       this.posts = data;
    },
    (error) => {
      console.log('error',error);
    }
    ,() => {});
  }
  onAddPost(){
    const dialogRef = this.dialog.open(AddPostDialogComponent, {
      width: '310px',
      data: { id : null, body : null}
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        return this.postsService.postPosts(result).pipe(first()).subscribe((data) => {
          this.getPosts();
      },
      (error) => {
        console.log('error',error);
      }
      ,() => {});
      }
    });
  }
  onPutPost(post : any){
    const dialogRef = this.dialog.open(AddPostDialogComponent, {
      width: '310px',
      data: post
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        return this.postsService.putPost(post.id, {body : result.body}).pipe(first()).subscribe((data) => {
          this.getPosts();
      },
      (error) => {
        console.log('error',error);
      }
      ,() => {});
      }
    });
  }
  onDeletePost(id){
    return this.postsService.deletePost(id).pipe(first()).subscribe((data) => {
      this.getPosts();
   },
   (error) => {
     console.log('error',error);
   }
   ,() => {});
  }
}
