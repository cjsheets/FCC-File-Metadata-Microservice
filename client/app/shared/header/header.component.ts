import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.view.html',
  styleUrls: ['./header.view.css']
})

export class HeaderComponent {
  prePageTitle: string = 'fcc.';
  pageTitle: string = 'ChadSheets';
  postPageTitle: string = '.com';
 }