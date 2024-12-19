import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {

  openMyAlert(){
    Swal.fire('Good job!','success');
  }
  // openMySnackBar(){
  //   new this.SnackBar('Hello');
  // }
}
