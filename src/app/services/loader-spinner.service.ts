import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../posts/store/store';
import { IAppState3 } from '../main-store/store';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderSpinnerService {

  isLoadin$ = new BehaviorSubject<boolean>(true)
  constructor(private store: Store<IAppState3>) { }

  show() {
    this.store.select("usersData").subscribe(data => {
      this.isLoadin$.next(data.loading);
    })
  }

  hide() {
    this.store.select("usersData").subscribe(data => {
      this.isLoadin$.next(data.loading);
    })
  }
}

