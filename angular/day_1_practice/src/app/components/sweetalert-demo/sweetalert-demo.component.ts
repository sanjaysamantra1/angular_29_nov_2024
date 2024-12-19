import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import SnackBar from 'awesome-snackbar';
@Component({
    selector: 'app-sweetalert-demo',
    imports: [],
    templateUrl: './sweetalert-demo.component.html',
    styleUrl: './sweetalert-demo.component.css',
})
export class SweetalertDemoComponent {
    openMyAlert() {
        Swal.fire('Good Job!', 'Open My Alert Function Fired', 'error');
    }
    openMySnackWar() {
        new SnackBar('Hello Good Morning', {
            position: 'top-center',
            theme: 'dark',
            timeout: 5000,
        });
    }
}
