import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-forms',
  standalone: true,
  templateUrl: './input-forms.component.html',
  styleUrl: './input-forms.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFormsComponent),
      multi: true
    }
  ]
})
export class InputFormsComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';

  value = '';
  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInput(value: string) {
    this.value = value;
    this.onChange(value);
  }
}
