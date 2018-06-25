import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  numberToDisplay = '';

  standard = {
    firstName: 'Benjamin',
    lastName: 'Glouton',
    role: 'Accueil',
    award: '',
    phoneNumber: '02-99-99-99-01'
  };

  sommelier = {
    firstName: 'David',
    lastName: 'Biraud',
    role: 'Sommelier',
    award: 'Meilleur Ouvrier de France 2002',
    phoneNumber: '02-99-99-99-98'
  };

  boucher = {
    firstName: 'Sébastien',
    lastName: 'Coirier',
    role: 'Boucher',
    award: 'Meilleur Ouvrier de France 2015',
    phoneNumber: '02-99-99-99-97'
  }

  constructor() { }

  ngOnInit() {
  }

  displayBig(telephoneNumber) {
    console.log(telephoneNumber);
    this.numberToDisplay = telephoneNumber;
  }

}
