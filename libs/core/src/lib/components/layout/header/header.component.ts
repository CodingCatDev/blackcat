import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'codingcatdev-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() drawer;
  constructor() {}

  ngOnInit(): void {}
}
