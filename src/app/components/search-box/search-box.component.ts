import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Iuser } from 'src/app/model/user.model';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Output("searchText") searchText = new EventEmitter<string>()
  text: string = ""




  constructor() {

  }

  filterText(){
    this.searchText.emit(this.text)
    // console.log(this.text )
  }

  ngOnInit(): void {


  }


}
