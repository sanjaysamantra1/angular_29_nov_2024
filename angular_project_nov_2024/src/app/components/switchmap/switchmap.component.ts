import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, switchMap, map } from 'rxjs';

@Component({
  selector: 'app-switchmap',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class switchmapComponent {
  searchResult$: Observable<any> | undefined;
  searchForm: any;
  constructor(private http: HttpClient) {
    this.searchForm = new FormGroup({
      searchField: new FormControl()
    });
  }
  ngOnInit() {
    this.searchResult$ = this.searchForm.get("searchField").valueChanges.pipe(
      switchMap((term) =>
        this.http.get<any>(`https://swapi.dev/api/people/?search=${term}`)
      ),
      map((response: any) =>
        response.count > 0 ? response.results : []
    ));
  }
}