import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function ageRangeValidator(minAge: number, maxAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const fieldValue = control.value;
        if (fieldValue < minAge || fieldValue > maxAge) {
            return { invalidAge: true }
        }
        return null;
    };
}
