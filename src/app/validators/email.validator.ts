import { AbstractControl } from "@angular/forms";

export function ValidateEmail(control: AbstractControl) {
    if (control.value.includes('muyoc.com') || !control.value.includes('@')) {//https + .com
        
        return {validEmail: true};
    }
    return null;
}