import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardinalPipe } from '../../pipes/cardinal.pipe';
import * as apiData from './members.json';
import { CommonModule } from '@angular/common';
import { AgePipe } from '../../pipes/age.pipe';
import { TitlePipe } from '../../pipes/title.pipe';
import { SearchMembersPipe } from "../../pipes/search-members.pipe";

@Component({
  selector: 'app-pipe-tester',
  standalone: true,
  imports: [FormsModule, CardinalPipe, CommonModule, AgePipe, TitlePipe, SearchMembersPipe],
  templateUrl: './pipe-tester.component.html',
  styleUrl: './pipe-tester.component.css'
})

export class PipeTesterComponent {
applyFilter() {
  console.log(this.searchText);
}
members:any = (apiData as any).default;
input: any;
dob: any;
searchText: string='';
}
