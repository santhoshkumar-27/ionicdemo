import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export class ForgotForm {
    forgot: FormGroup;
    constructor(private fb: FormBuilder) {}
    createForgotForm(): FormGroup {
        return this.forgot = this.fb.group({
            email: ['', [Validators.required]]
        });
    }
}
