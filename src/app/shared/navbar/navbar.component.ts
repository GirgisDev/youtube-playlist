import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() searchString: EventEmitter<any> = new EventEmitter;
  @Input("hasSearch") hasSearch: boolean;

  constructor() { }

  ngOnInit() {
  }

  emitSearchValue(value) {
    this.searchString.emit(value);
  }

}
