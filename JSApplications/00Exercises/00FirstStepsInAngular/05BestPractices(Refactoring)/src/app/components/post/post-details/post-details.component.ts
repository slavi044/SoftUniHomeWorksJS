import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/core/services/post.service';
import { CommentService } from 'src/app/core/services/comment.service';
import { CommentInfo } from '../../shared/models/Comment-Info';
import { PostInfo } from '../../shared/models/Post-Info';
import { Observable } from 'rxjs';
// import { PostService } from '../services/post.service';
// import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: PostInfo;
  comments$: Observable<CommentInfo[]>;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.post = this.route.snapshot.data['post'];
    this.comments$ = this.commentService.getAllForPost(this.id);
  }

  loadComments() {
    this.comments$ = this.commentService.getAllForPost(this.id);
  }

  postComment(body: Object) {
    this.commentService
      .postComment(body)
      .subscribe(() => {
        this.loadComments();
        //this.postCommentEmiter.emit();
        // Sent Event Emitter to details component
        // this.loadComments();
      });
  }

  deleteComment(id: string) {
    this.commentService.deleteComment(id)
      .subscribe(() => {
        this.loadComments();
      })
  }

  // isAuthor(commentInfo: Object) {
  //   return commentInfo['_acl']['creator'] === localStorage.getItem('userId');
  // }

  deletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(() => {
        this.router.navigate(['/posts']);
      })
  }
}
