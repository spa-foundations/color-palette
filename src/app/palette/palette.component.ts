import {Component, Input, OnInit} from '@angular/core';
import {PaletteService} from '../palette.service';
import {Palette} from '../palette';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {
  @Input() size;
  @Input() colorA;
  @Input() colorB;
  palette: Palette;
  constructor(private paletteService: PaletteService) {
  }

  ngOnInit(): void {
    this.generatePalette();
  }

  /**
   * Redraws the palette
   */
  generatePalette(): void {
    this.palette = this.paletteService.generate(this.size, this.colorA, this.colorB);
  }
}
