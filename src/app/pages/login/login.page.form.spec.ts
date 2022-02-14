import { FormBuilder, FormGroup } from '@angular/forms';
import { loginForm } from './login.page.form';

describe('loginPageForm', () => {
    let login!: loginForm;
    let form!: FormGroup;
    beforeEach( () => {
        login = new loginForm(new FormBuilder());
        form = login.createForm();
    });
    it('should create ', () => {
        expect(form).not.toBeNull();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email').value).toEqual('');
        expect(form.get('email').valid).toBeFalsy();
        expect(form.get('password')).not.toBeNull();
        expect(form.get('password').value).toEqual('');
        expect(form.get('password').valid).toBeFalsy();
    });
    it('shoudl have email invalid if email in not valid', () => {
        form.get('email').setValue('invalid email');
        expect(form.get('email').valid).toBeFalsy();
    });
    it('shoudl have email valid if email is valid', () => {
        form.get('email').setValue('valid@email.com');
        expect(form.get('email').valid).toBeTruthy();
    });
    it('shoudl have valid form', () => {
        form.get('email').setValue('example@gmail.com');
        form.get('password').setValue('123456789');
        expect(form.valid).toBeTruthy();
    });
});
