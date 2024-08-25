import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState3 } from 'src/app/main-store/store';
import { getUser, getUsers } from 'src/app/main-store/users.actions';
import { Iuser } from 'src/app/model/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: Iuser[] = [];
  totalPges: number = 0
  currentPage: number = 0;
  serchText: string = ''
  constructor(private usersService: UsersService, private store: Store<IAppState3>,private route:ActivatedRoute) { }

  ngOnInit(): void {


    
    this.store.select("usersData").subscribe(
      {
        next: (userdata) => {
          this.users = userdata.data;
          this.totalPges = userdata.total_pages;
          this.currentPage = userdata.page
          // this.currentPage=userdata.page 
          // console.log(this.currentPage)  
          
          
        },
        error: (error) => {
          console.log(error)
        }
      }
      )
      this.store.dispatch(getUsers({ pageIndex: this.currentPage }));


  }


  getFilterText(text: string) {
    this.serchText = text
    console.log(text)
  }

  changePageIndex(index: number) {
    console.log(index)
    this.serchText='';

    this.route.queryParams.subscribe(params=>{
      console.log(params['page'])
    })
    if (index !== this.currentPage) {
      this.store.dispatch(getUsers({ pageIndex: index }));
      this.store.select("usersData").subscribe(userdata => {
        this.currentPage = userdata.page
      })
    }

  }

}
