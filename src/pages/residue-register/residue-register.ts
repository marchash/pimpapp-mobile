import { MaterialItem } from './../MaterialItem';
import { Residue } from './../Residue';
import { QuantityPage } from './quantity/quantity';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { MaterialRecover } from './../MaterialRecover';

@Component({
  templateUrl: 'residue-register.html',
})
export class ResidueRegister {
  private materialRecover: MaterialRecover;
  private residue: Residue;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController) {
      this.materialRecover = new MaterialRecover();
      this.residue = new Residue();
  }

  showModalQuantity(material){
      let materialSelected = this.materialRecover.findMaterial(material);
      let materialItem = new MaterialItem;
      
      materialItem.material = materialSelected;

      // Modal structure
      let modal = this.modalCtrl.create(QuantityPage, 
      { material: materialSelected, residue: this.residue });
      modal.onDidDismiss(data => {
          if (data > 0)
            this.residue.addMaterialItem(materialItem, data);
      });
      modal.present();
  }

}
