import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState3 } from 'src/app/main-store/store';
import { getUser } from 'src/app/main-store/users.actions';
import { Iuser } from 'src/app/model/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user: Iuser | null = {
    avatar: '',
    first_name: '',
    last_name: '',
    email: '',
    id: 0
  }
  constructor(private userService: UsersService,
    private router: Router,
    private store: Store<IAppState3>,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    let id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    console.log(this.user)
    this.store.dispatch(getUser({ id: Number(id) }));
    this.store.select("usersData").subscribe((data) => {
      // console.log(data.loading)
      if(!data.loading){
        this.user = data.singleUser
        console.log(data.singleUser)

      }
    })
    // console.log(this.user)
  }

  ngOnDestroy(): void {
    // console.log(this.user)
    // this.user = null


  }

  back() {
    this.router.navigate(['../'], { relativeTo: this.route });
    // this.user = null
  }

}
