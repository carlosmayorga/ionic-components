import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { HeaderComponent } from 'src/app/components/header/header.component';


@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

@ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

@ViewChild(HeaderComponent, {static: false}) headerComponent: HeaderComponent;


  titulo = 'Infinite Scroll';

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log('Cargando');

    setTimeout(() => {

      if (this.data.length > 50) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        this.headerComponent.titulo = 'hola';
        return;
      }
      const nuevoArr = Array(20);
      this.data.push( ...nuevoArr);
      event.target.complete();

    }, 1000);
  }

}
