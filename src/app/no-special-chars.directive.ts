import { Directive } from '@angular/core';
import {NG_VALIDATORS, Validator, FormControl, ValidationErrors, AbstractControl} from '@angular/forms';

@Directive({
  selector: '[appNoSpecialChars]',
  providers: [{provide: NG_VALIDATORS, useExisting: NoSpecialCharsDirective, multi: true}],
})
export class NoSpecialCharsDirective implements Validator {

  constructor() { }
  
  registerOnValidatorChange(fn: () => void): void {
  }
  
  validate(control: FormControl): ValidationErrors | null {
    const hasSpecialChars = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(control.value);
    const message = {
      'hasSpecialChars': {
        'message': 'No Special Characters Allowed'
      }
    };
    return hasSpecialChars ? message : null;
  }

}
