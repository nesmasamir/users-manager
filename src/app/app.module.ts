import { EnvironmentInjector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './posts/store/posts.reducer';
import { appEffects, appReducer } from './posts/store/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { appReducer2 } from './posts/new-store/storev2';
import { albumsEffects } from './posts/new-store/album.effect';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { appEffects3, appReducers3 } from './main-store/store';
import { CacheInterceptorInterceptor } from './interceptors/cache-interceptor.interceptor';
import { LoadinSpinnerComponent } from './components/loadin-spinner/loadin-spinner.component';
import { LoadingSpinnerInterceptor } from './interceptors/loading-spinner.interceptor';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersListComponent,
    UserComponent,
    UserDetailsComponent,
    PaginationComponent,
    SearchBoxComponent,
    LoadinSpinnerComponent,
    FilterPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // StoreModule.forRoot(appReducer2),
    // EffectsModule.forRoot(albumsEffects),
    StoreModule.forRoot(appReducers3),
    EffectsModule.forRoot(appEffects3),
    StoreDevtoolsModule.instrument({ logOnly: false })

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:CacheInterceptorInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoadingSpinnerInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }  
