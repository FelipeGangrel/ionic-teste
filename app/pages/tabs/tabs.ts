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
  public xBoxParametros: any;
  public ps4Parametros: any;

  constructor() {

    this.xBoxParametros = { 
      nome: 'Xbox',
      email: 'felipefrog@gmail.com'
    }

    this.ps4Parametros = { 
      nome: 'PS4',
      email: 'felipefrog@gmail.com'
    }

    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = HomePage;
    this.tab3Root = ContactPage;
  }

  
}
