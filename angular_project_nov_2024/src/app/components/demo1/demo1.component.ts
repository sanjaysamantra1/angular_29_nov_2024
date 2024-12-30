import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import Snackbar from 'awesome-snackbar';
import { MyModalComponent } from '../my-modal/my-modal.component';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {
  openMyAlert(){
    Swal.fire('Good job', 'You clicked the button!', 'success');
  }

  openMySnackBar(){
    new Snackbar('Hello, Good Morning', { position: 'top-center', theme: 'light', timeout: 2000 });
  }

}
