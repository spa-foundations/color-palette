import {Component, Input, OnInit} from '@angular/core';
import {PaletteService} from '../palette.service';
import {Palette} from '../palette';
import {Color} from '../color';
import {MatSnackBar} from '@angular/material/snack-bar';

/**
 * Palette component.
 */

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
  constructor(private paletteService: PaletteService, private snackBar: MatSnackBar) {
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

  /**
   * Fired when the color is copied to the clipboard
   */
  colorCopied(color: Color) {
    this.snackBar.open(`Copied ${color.color} to the clipboard`, 'Dismiss', {duration: 5000});
  }
}
