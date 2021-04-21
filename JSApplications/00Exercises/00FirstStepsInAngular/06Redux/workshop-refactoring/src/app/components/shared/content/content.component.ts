import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, getIsAuthenticated } from 'src/app/+store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  isLogged$: Observable<boolean>;

  constructor(
    private store: Store<IAppState>
  ) {
    this.isLogged$ = store.select(getIsAuthenticated);
  }

}
