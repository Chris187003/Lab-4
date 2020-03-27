import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  private firstName: string;
  private lastName: string;
  constructor() {
    this.firstName = 'Chris';
    this.lastName = 'Ochoa';
  }

  showGreeting() {
    const row2 = document.getElementById('r1c2');
    row2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + '.';
  }

  resetGreeting() {
    console.log('From showGreeting function this.firstName: ', this.firstName, 'this.lastName: ', this.lastName);
    const row2 = document.getElementById('r1c2');
    console.log('row2', row2, 'document', document);
    row2.innerHTML = 'r1c2';
  }

  ngOnInit() {
  }

}
