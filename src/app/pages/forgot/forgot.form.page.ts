import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export class ForgotForm {
    forgot: FormGroup;
    constructor(private fb: FormBuilder) {}
    createForgotForm(): FormGroup {
        return this.forgot = this.fb.group({
            veriCode:
            ['',
            [Validators.required, Validators.pattern(/(^([a-zA-Z0-9\.]{0,})(@)([a-zA-Z]{2,})(\.)([A-Za-z]{2,})$)|([\d]{10})/)]]
        });
    }
}
