import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @ViewChildren('div') div!:ElementRef;
onClick(){
  console.log( this.div.nativeElement);
 
}
}
