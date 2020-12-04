import {Injectable} from '@angular/core';
import {Color} from './color';
import {Palette} from './palette';
import {ChromaService} from './chroma.service';

/**
 * Palette service. Its purpose is to generate a color palette given 2 input color parameters.
 * @see https://vis4.net/chromajs/ ChromaJS API
 */

@Injectable({
  providedIn: 'root'
})
export class PaletteService {

  constructor(private chromaService: ChromaService) {
  }

  /**
   * Generates a color palet givent two colors
   * @param size Size of the palette
   * @param colorA Top-left color
   * @param colorB Bottom-right colo
   */
  generate(size: number, colorA: Color, colorB: Color): Palette {
    const palette: Palette = new Palette();
    const chroma = this.chromaService.chroma;
    const colors = chroma
      .scale([colorA.color, colorB.color])
      .mode('lch')
      .colors(size);
    // generating palette
    colors.forEach(color => palette.colors.push({color}));

    return palette;
  }
}
