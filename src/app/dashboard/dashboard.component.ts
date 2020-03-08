import {Component, OnInit} from '@angular/core';
import {Color} from '../color';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  colorA: Color = {color: '#0086b3'};
  colorB: Color = {color: '#b30000'};
  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * Fired when the user clicks on "generate palette"
   */
  onGenerate() {
    window.alert('You will be notified when the product goes on sale');
  }
}
