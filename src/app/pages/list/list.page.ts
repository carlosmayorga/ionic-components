import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  titulo = 'List';

  usuarios: Observable < any > ;

  @ViewChild('lista', {static: false}) lista: IonList;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usuarios = this.dataService.getUsers();
  }

  favorite(user) {
    console.log(user);
  }

  share(user) {
    console.log(user);
    this.lista.closeSlidingItems();
  }

  delete(user) {
    console.log(user);
  }
}
