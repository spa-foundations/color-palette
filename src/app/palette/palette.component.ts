import {Component, Input, OnInit} from '@angular/core';
import {Color} from '../color';
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
    const colorA = {color: '#000000'};
    const colorB = {color: '#000000'};
    this.palette = this.paletteService.generate(this.size, colorA, colorB);
  }
}
