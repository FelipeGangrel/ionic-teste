import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  public parametros: any;
  public foo: any;

  constructor(public navCtrl: NavController, public params: NavParams) {
  
    this.parametros = params;
    console.log(this.parametros);
    this.foo = this.parametros.data;
    console.log(this.foo);


  }
}
