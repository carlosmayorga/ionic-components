import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  titulo = 'Segment';
  superHeroes: Observable<any>;
  publisher = '';

  constructor(private dataServices: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHeroes =  this.dataServices.getHeroes();

  }


  segmentChanged( event ) {

    const valorSegmento = event.detail.value;

    if ( valorSegmento === 'todos') {
      this.publisher = '';
      return;
    }

    this.publisher = valorSegmento;

  }

}
