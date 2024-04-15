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

    if (errors.includes('required')) {

        this.htmlElement.nativeElement.innerText = 'Campo requerido';
        return;
    }

    if (errors.includes('minlength')) {
      const min = this._errors!['minlength']["requiredLength"];
      const current = this._errors!['minlength']["actualLength"];

      this.htmlElement.nativeElement.innerText = `El campo debe tener al menos ${min} caracteres, actualmente tiene ${current} caracteres`

      return;

    }

    if ( errors.includes('email')) {
      this.htmlElement.nativeElement.innerText = 'El email no es válido';
      return;
    }
  }

  setStyle() {

    if( !this.htmlElement ) return;

    this.htmlElement.nativeElement.style.color = this._color;
  }



}
