import { Component, Input, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-select-input-component',
  standalone: true,
  imports: [CommonModule, FormsModule],

  templateUrl: './select-input-component.component.html',
  styleUrl: './select-input-component.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectInputComponentComponent),
      multi: true,
    }
  ]
})
export class SelectInputComponentComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() options: { value: string, label: string }[] = [];
  @Input() value: string = ''; 
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onChange = (value: any) => { };
  onTouched = () => { };

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onSelect(value: string) {
    this.value = value;
    this.onChange(value);
  }

  handleSelectChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    const selectedValue = select.value;
    this.onSelect(selectedValue);
    this.value = select.value;
    this.valueChange.emit(this.value);
  }
}
