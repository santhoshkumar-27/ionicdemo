import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// eslint-disable-next-line @typescript-eslint/naming-convention
export class loginForm {
    createLoginValidate: FormGroup;
    constructor(private fb: FormBuilder) {}
    createForm(): FormGroup{
        return this.createLoginValidate = this.fb.group({
            email: ['',[Validators.email, Validators.required]],
            password: ['', Validators.required]
        });
    }
}
