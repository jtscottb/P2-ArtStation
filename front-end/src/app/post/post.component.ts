import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postId: number = 6;
  // @Input() post!: Post;
  post: Post = {post_id: 2, title: "Testing", 
    poster: {user_id: 0, username: "CDawg", fname:"Chris", lname:"Davis", email:"Jone@yahoo.com"}, 
    descript: "Just trying out how the post object looks.", likes: 0, dislikes: 0, posted: "1/6/2022"
  }

  constructor(
    private postService : PostService,
    private userService : UserService
    ) { }

  ngOnInit(): void {
    this.postService.getPost(this.postId).subscribe( (obj: Post) => { this.post = obj });
  }

}
