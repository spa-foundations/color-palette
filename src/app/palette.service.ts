import {Injectable} from '@angular/core';
import {Color} from './color';
import {Palette} from './palette';

/**
 * Palette service. Its purpose is to generate a color palette given 2 input color parameters.
 */

@Injectable({
  providedIn: 'root'
})
export class PaletteService {

  constructor() {
  }

  /**
   * Generates a color palet givent two colors
   * @param size Size of the palette
   * @param colorA Top-left color
   * @param colorB Bottom-right colo
   */
  generate(size: number, colorA: Color, colorB: Color): Palette {
    const palette: Palette = new Palette();

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        console.log(colorA);
        palette.colors.push(colorA);
      }
    }
    return palette;
  }
}
