import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = '';
  private _errors?: ValidationErrors | null;

  constructor(private element: ElementRef<HTMLElement>) {

    this.htmlElement = element;
  }

  @Input()
  set color(color: string) {
    this._color = color;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
  }

  setErrorMessage(): void {
    if ( !this.htmlElement || null) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }

    const errors = Object.keys(this._errors);

    if (errors.includes('minlength') && this._errors?.["minlength"]?.requiredLength >= 3) {

      console.log(this._errors?.["minlength"]?.requiredLength)
      this.htmlElement.nativeElement.innerText = 'No cumple el mínimo de caracteres';
      return;

    }

    console.log({errors})



  }

  setStyle() {

    if( !this.htmlElement ) return;

    this.htmlElement.nativeElement.style.color = this._color;
  }



}
