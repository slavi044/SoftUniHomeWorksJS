import { Component, OnInit } from '@angular/core';
import { PostList } from 'src/app/components/shared/models/Post-List';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/core/services/comment.service';
import { Observable } from 'rxjs';
import { CommentInfo } from 'src/app/components/shared/models/Comment-Info';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: PostList;
  comments$: Observable<CommentInfo[]>;

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.post = this.route.snapshot.data['post'];
    this.comments$ = this.commentService.getAllForPost(this.post._id);
  }

  loadComments() {
    this.comments$ = this.commentService.getAllForPost(this.post._id);
  }

  deleteComment(id: string) {
    this.commentService.deleteComment(id)
      .subscribe(() => {
        this.loadComments();
      })
  }
}
