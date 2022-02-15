/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/quotes */
import { FormBuilder, FormGroup } from "@angular/forms";
import { ForgotForm } from "./forgot.form.page";

describe('forgotpageform', () => {
    let forgot: ForgotForm;
    let form!: FormGroup;
    // eslint-disable-next-line prefer-const
    forgot = new ForgotForm(new FormBuilder());
    form = forgot.createForgotForm();
    it('should create a form', () => {
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email').value).toEqual('');
        expect(form.get('email').valid).toBeFalsy();
    });
    it('should have email validation', () => {
        form.get('email').setValue('invalid email');
        expect(form.get('email').valid).toBeFalsy();
    });
});
