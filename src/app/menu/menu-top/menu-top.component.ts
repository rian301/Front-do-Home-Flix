import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-top',
  templateUrl: './menu-top.component.html',
  styleUrls: ['./menu-top.component.scss']
})
export class MenuTopComponent implements OnInit {

  @Output() onToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  disparaEvento() {
    this.onToggle.emit();
  }

}
