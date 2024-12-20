import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';

@Component({
  selector: 'app-demo2',
  imports: [],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.css'
})
export class Demo2Component {
  openMyAlert(){
    Swal.fire('Good Job!', 'You clicked the button!', 'success');
  }

  openMySnackBar(){
    new Snackbar('Hello, Good morning. This is balaji',
    { position: 'top-center', theme:'light',timeout:2000 }); 
  };
}
