import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-holder',
  templateUrl: './input-holder.component.html',
  styleUrls: ['./input-holder.component.css']
})
export class InputHolderComponent implements OnInit {

  @Input() inputId: string;
  @Input() control: FormControl;
  
  constructor() { }

  ngOnInit() {
  }

}
