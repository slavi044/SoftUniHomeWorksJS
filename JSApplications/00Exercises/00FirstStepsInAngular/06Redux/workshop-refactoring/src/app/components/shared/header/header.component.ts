import { Component, OnInit, AfterViewInit, DoCheck } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, getIsAuthenticated, getAuthUsername } from 'src/app/+store';
import { Logout } from 'src/app/+store/auth/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username$: Observable<string>;
  isLogged$: Observable<boolean>;

  constructor(private store: Store<IAppState>) {
    this.isLogged$ = this.store.select(getIsAuthenticated);
    this.username$ = this.store.select(getAuthUsername);
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}
