import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-inner',
  templateUrl: './test-inner.component.html',
  styleUrls: ['./test-inner.component.css'],
})
export class TestInnerComponent implements OnInit {

  @Input() testTitle: string;
  constructor() { }

  ngOnInit() {
  }

}
