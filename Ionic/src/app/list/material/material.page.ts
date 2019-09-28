import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Item } from 'src/model/Item';

@Component({
  selector: 'material-page',
  templateUrl: 'material.page.html',
  styleUrls: ['material.page.scss']
})
export class MaterialPage implements OnInit {
  item : Item;

  constructor(private modalController: ModalController, private navParams: NavParams) {

  }
  ngOnInit() {
    this.item = this.navParams.data.item;
  }
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }
}