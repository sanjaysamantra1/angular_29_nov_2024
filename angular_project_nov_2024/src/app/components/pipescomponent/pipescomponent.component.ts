import { Component } from '@angular/core';
import { PipeexamplePipe } from '../../pipes/pipeexample.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NameMrMissPipePipe } from '../../pipes/name-mr-miss-pipe.pipe';
import { SearchnamePipe } from '../../pipes/searchname.pipe';

@Component({
  selector: 'app-pipescomponent',
  imports: [CommonModule,
    PipeexamplePipe,NameMrMissPipePipe, SearchnamePipe,
  FormsModule],
  templateUrl: './pipescomponent.component.html',
  styleUrl: './pipescomponent.component.css'
})
export class PipescomponentComponent {
  abc: number = 0;
  employee = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];
  inputText: string = '';











}
