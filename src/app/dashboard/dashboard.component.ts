import {Component, OnInit} from '@angular/core';
import {Color} from '../color';

/**
 * Dashboard component. Orchestrates the component communication between the palette and the color selector.
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // default colors
  colorA: Color = {color: '#0086b3'};
  colorB: Color = {color: '#b30000'};
  size = 10;

  constructor() {
  }

  ngOnInit(): void {
  }
}
