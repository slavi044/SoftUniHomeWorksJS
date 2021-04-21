import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { CommentService } from 'src/app/core/services/comment.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  @Input() postId: string;
  @ViewChild('f') createCommentForm: NgForm;
  @Output('onCreateComment') commentEmitter = new EventEmitter<void>();

  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit() {
  }
  
  postComment() {
    const body = this.createCommentForm.value;
    body['postId'] = this.postId;
    body['author'] = localStorage.getItem('username');

    this.commentService
      .postComment(this.createCommentForm.value)
      .subscribe((data) => {
        this.createCommentForm.reset();
        this.commentEmitter.emit();
      })
  }
}
