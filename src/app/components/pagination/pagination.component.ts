import { Component, OnInit } from '@angular/core';
import { PaginationService } from '@services/pagination/pagination.service';
import {MatPaginatorIntl, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor(
    private _pagination: PaginationService
  ) {
  }



  comments: Comment[] = [];
  page_size: number = 9;
  page_number:number = 1;
  page_size_options = [3, 6, 12, 15, 30];

  ngOnInit(): void {
    this._pagination.getComments().subscribe(comments => this.comments = comments);
  }

  handlePage(e: PageEvent){
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }

}
