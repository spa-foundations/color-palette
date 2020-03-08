import { Injectable } from '@angular/core';
import * as Chroma from 'chroma-js';

/**
 * Chroma service. This is a wrapper of chroma.js library
 * @see https://vis4.net/chromajs/
 * @author David Galvis <dav.galvis@gmail.com>
 * @copyright Copyright (c) 2020
 */

@Injectable({
  providedIn: 'root'
})
export class ChromaService {
  chroma = Chroma;
  constructor() { }

}
