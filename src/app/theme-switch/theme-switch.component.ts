import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [],
  template: `<button (click)="[onChange(), onDivBgChange()]">
    change color
  </button>`,
  styles: `button{
    padding:5px 15px;
    border:none;
    border-radius:15px;
    background-color:lightgreen;
    color:white;
  }
  button:hover{
    background-color:green;
    cursor:pointer;
  }`,
})
export class ThemeSwitchComponent {
  @Input() bgClr: string = 'lightgray';
  @Output() clrChange = new EventEmitter<string>();
  @Input() divBg: string = 'blue';
  @Output() divBgChange = new EventEmitter<string>();
  onChange() {
    this.clrChange.emit(this.bgClr);
  }
  onDivBgChange() {
    this.divBg = this.divBg === 'lightgray' ? 'blue' : 'lightgray';
    this.divBgChange.emit(this.divBg);
  }
}
