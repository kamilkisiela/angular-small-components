import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-giphy-view',
  template: `
    <app-giphy-search (onSearch)="search($event)"></app-giphy-search>
    <section>
      <app-spinner *ngIf="!!loading"></app-spinner>
      <app-giphy-error *ngIf="!!error"></app-giphy-error>
      <app-giphy-image *ngIf="!loading && !error" [image]="image"></app-giphy-image>
    </section>
  `
})

export class GiphyViewComponent {
  @Input() loading: boolean;
  @Input() error: boolean;
  @Input() image: boolean;
  @Output() onSearch = new EventEmitter<string>();

  search(search: string) {
    this.onSearch.next(search);
  }
}
