import { Component, OnInit } from '@angular/core';

import { GiphyService } from './service';

@Component({
  selector: 'app-giphy',
  template: `
    <app-giphy-view
      [loading]="loading"
      [error]="error"
      [image]="image"
      (onSearch)="onSearch($event)">
    </app-giphy-view>
  `
})

export class GiphyComponent {
  loading = false;
  error = false;
  image: string;

  constructor(
    private giphy: GiphyService
  ) {}

  onSearch(search: string) {
    this.random(search);
  }

  random(search: string) {
    this.loading = true;
    this.error = false;

    this.giphy.random(search)
      .subscribe({
        next: (image) => {
          this.image = image;
        },
        error: () => {
          this.error = true;
        },
        complete: () => {
          this.loading = false;
        }
      });
  }
}
