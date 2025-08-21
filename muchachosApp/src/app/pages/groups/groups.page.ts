import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
    standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]

})
export class GroupsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
