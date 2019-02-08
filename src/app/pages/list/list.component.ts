import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/core/service/list.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ListModel } from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  lists: ListModel[] = [];
  numbers: number[] = [];
  constructor(private listService: ListService, private spinner: NgxSpinnerService) {

  }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    for (let index = 0; index < 10000; index++) {
      this.lists.push({
        id: (index + 1),
        name: 'John ' + (index + 1),
        date: '02-20-1989',
        price: 20.9809 + index
      });
    }
  }
}
