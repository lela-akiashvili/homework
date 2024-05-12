import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, ThemeSwitchComponent, FormComponent],
  templateUrl: './app.component.html',
  styles: `
  div{
  display:grid;
  justify-items:center;
  padding:1rem 0;
  }
  .cards{
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    display:flex;
    gap:1rem;
    flex-wrap:wrap;
    align-items:stretch;
    margin-bottom:10px;
  }`,
})
export class AppComponent {
  title = 'homework';
  bgClrs = 'lightgray';
  wife = {
    bgClr: 'lightgreen',
    name: 'Shen Qingqiu',
    spouse: 'Luo Binghe',
    src: 'https://i.pinimg.com/564x/85/1c/9a/851c9a4a863d56c1c020daa612bf3086.jpg',
  };
  husband = {
    bgClr: 'red',
    name: 'Luo Binghe',
    spouse: 'Shen Qingqiu',
    src: 'https://i.pinimg.com/564x/5b/88/96/5b8896f7b3ef79ea99c1f6be02edcd82.jpg',
  };
  onClick(data: string) {
    this.wife.bgClr = data;
    this.husband.bgClr = data;
  }
  onshow(data: string) {
    console.log(data);
  }
}
