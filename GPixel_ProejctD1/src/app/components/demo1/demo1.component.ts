import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ProductsComponent } from '../products/products.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrudOpsComponent } from '../crud-ops/crud-ops.component';

@Component({
  selector: 'app-demo1',
  standalone: true,
  imports: [CrudOpsComponent,CommonModule,FormsModule],
  templateUrl: './demo1.component.html',
  styleUrl: './demo1.component.css'
})
export class Demo1Component {

  openMyAlert(){
    Swal.fire('Good job!','success');
  }
}
