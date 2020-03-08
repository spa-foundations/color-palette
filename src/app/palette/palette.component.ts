import {Component, Input, OnInit} from '@angular/core';
import {Color} from "../color";

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {
  @Input() size;
  palette: Color[] = [];
  constructor() {
  }

  ngOnInit(): void {
    this.initPalette();
  }

  /**
   * Initializes the color palette
   */
  private initPalette(): void {
    for (let i = 0; i < this.size; i++) {
      this.palette.push({
        color: 'black'
      });
    }
  }
}
