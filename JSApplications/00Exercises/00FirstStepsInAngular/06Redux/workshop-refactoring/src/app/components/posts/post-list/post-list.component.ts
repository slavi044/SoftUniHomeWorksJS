import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/core/services/post.service';
import { PostList } from 'src/app/components/shared/models/Post-List';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  allPosts$: Observable<PostList[]>;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.allPosts$ = this.postService.getAll();
    this.route.url.subscribe((segment: UrlSegment[]) => {
      if (segment.length > 0) {
        this.allPosts$ = this.postService.getUserPosts();
      } else {
        this.allPosts$ = this.postService.getAll();
      }
    })
  }

  onDeletePost(id: string) {
    this.postService.deletePost(id)
      .subscribe(() => {
        this.allPosts$ = this.postService.getAll();
      })
  }
}
