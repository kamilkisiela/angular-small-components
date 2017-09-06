import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-giphy-image',
  template: `
    <img *ngIf="image" [src]=image/>
    <span *ngIf="!image">No results found</span>
  `
})

export class GiphyImageComponent {
  @Input() image: string;
}
