import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './components/shared/shared.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './+store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthEffects } from './+store/auth/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppRouterSerializer } from './core/app-router-serializer';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    StoreRouterConnectingModule.forRoot({
      serializer: AppRouterSerializer
    }),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([
      AuthEffects
    ]),
    StoreDevtoolsModule.instrument({}),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
