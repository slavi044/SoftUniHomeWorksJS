import { 
  Component, 
  Input, 
  Output, 
  EventEmitter 
} from '@angular/core';
import { CommentInfo } from '../../shared/models/Comment-Info';

@Component({
  selector: 'app-comment-info',
  templateUrl: './comment-info.component.html',
  styleUrls: ['./comment-info.component.css']
})
export class CommentInfoComponent {
  @Input() commentInfo: CommentInfo;
  @Output() onDeleteComment = new EventEmitter<string>();

  deleteComment() {
    this.onDeleteComment.emit(this.commentInfo._id);
  }

  isCommentAuthor() {
    return this.commentInfo._acl.creator === localStorage.getItem('userId');
  }
}
