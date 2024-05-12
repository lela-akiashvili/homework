import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  template: `<div [style.backgroundColor]="bgClr">
    <img [src]="src" alt="" />
    <h2>{{ name }}</h2>
    <p>Spouse: {{ spouse }}</p>
  </div>`,
  styles: `
  div{max-width: fit-content;
    border-radius:15px;
  overflow:hidden;}
  h2,p{
    padding:2px 10px 5px 12px;
  }
  p{
    padding-bottom:10px;
  }
  img{
    max-height:65vh;
  }`,
})
export class CardComponent {
  @Input() bgClr: string = '';
  @Input() src: string = '';
  @Input() name: string = '';
  @Input() spouse: string = '';
}
