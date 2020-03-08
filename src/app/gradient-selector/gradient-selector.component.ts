import {Component, Input, OnInit} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import {Color} from '../color';

@Component({
  selector: 'app-gradient-selector',
  templateUrl: './gradient-selector.component.html',
  styleUrls: ['./gradient-selector.component.scss']
})
export class GradientSelectorComponent implements OnInit {
  @Input() colorA: Color;
  @Input() colorB: Color;
  @Input() size: number;

  @Output() generate = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
