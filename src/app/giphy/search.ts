import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-giphy-search',
  template: `
    <section>
      <form [formGroup]="searchForm" (submit)="submit()">
        <div>
          Enter a word or phrase:
          <input type="text" formControlName="query"/>
          <button type="submit">Search</button>
        </div>
        <br />
      </form>
    </section>
  `
})

export class GiphySearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<string>();

  searchForm = new FormGroup({
    query: new FormControl('dog', Validators.required)
  });

  ngOnInit() {
    setTimeout(() => {
      this.submit();
    });
  }

  submit() {
    if (this.searchForm.valid) {
      this.onSearch.next(this.searchForm.get('query').value);
    }
  }
}
