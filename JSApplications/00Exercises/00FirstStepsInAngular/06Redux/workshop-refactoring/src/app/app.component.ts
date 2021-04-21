import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, getRouterUrl } from './+store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'workshop-refactoring';
  url$: Observable<string>;

  constructor(store: Store<IAppState>) {
    this.url$ = store.select(getRouterUrl);
  }
}
