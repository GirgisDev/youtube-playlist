import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Output() paginateTo: EventEmitter<any> = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  paginate(to) {
    this.paginateTo.emit(to);
  }

}
