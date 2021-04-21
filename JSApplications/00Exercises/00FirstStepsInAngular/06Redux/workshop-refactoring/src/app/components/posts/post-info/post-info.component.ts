import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PostList } from '../../shared/models/Post-List';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent {
  @Input() post: PostList;
  @Input() rank: number;
  @Input() desc: string;
  @Output('onDeletePost') deleteEmitter = new EventEmitter<string>();

  isAuthor() {
    return this.post._acl.creator === localStorage.getItem('userId');
  }

  deletePost(id: string) {
    this.deleteEmitter.emit(id);
  }
}
