import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() message: string;
  @Input() field: FormGroup;
  @Input() error: string;
  constructor() { }

  ngOnInit() {}

  showError() {
    if(this.field.errors?.[this.error]) {
      return true;
    }
    return false;
  }
}
