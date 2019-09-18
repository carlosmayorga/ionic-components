import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  titulo = 'DateTime';
  fechaNaci: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event) {
    console.log(event.detail.value);
  }

}
