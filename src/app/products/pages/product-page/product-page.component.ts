import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {


  public color = '';

  private formBuilder = inject( FormBuilder);


  public myform = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.email]],
  })


  changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }


}
