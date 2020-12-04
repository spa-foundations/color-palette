import { Injectable } from '@angular/core';
import * as Chroma from 'chroma-js';

/**
 * Chroma service. This is a wrapper of chroma.js library
 * @see https://vis4.net/chromajs/
 */

@Injectable({
  providedIn: 'root'
})
export class ChromaService {
  chroma = Chroma;
  constructor() { }

}
