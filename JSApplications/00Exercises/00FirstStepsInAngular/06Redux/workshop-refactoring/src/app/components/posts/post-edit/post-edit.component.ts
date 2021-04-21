import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { PostEdit } from 'src/app/components/shared/models/Post-Edit';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  @ViewChild('f') editPostForm: NgForm;
  post: PostEdit;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.post = this.route.snapshot.data['post'];
  }

  editPost() {
    const body = this.editPostForm.value;
    body['author'] = localStorage.getItem('username');

    this.postService.editPost(body, this.post._id)
      .subscribe(() => {
        this.router.navigate([ '/posts' ]);
      })
  }
}
