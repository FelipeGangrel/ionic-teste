import { Component } from '@angular/core';
// import { NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  public tab1Root: any;
  public tab2Root: any;
  public tab3Root: any;
  public parametros: any;

  constructor() {

     this.parametros = {
      nome: 'Felipe',
      email: 'felipefrog@gmail.com'
    }

    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = HomePage;
    this.tab3Root = ContactPage;
  }

  
}
