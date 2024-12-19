import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import Snackbar from 'awesome-snackbar'
import { timeout } from 'rxjs';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {

  openMyAlert(){
    Swal.fire('Good Job','You clicked this Button');
  }

  openMySnackBar(){
    new Snackbar('Hello, Rohith',
    {position: 'top-center', theme:'light',timeout:2000})
  };
}

