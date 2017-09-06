import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="spinner"></div>
  `,
  styles: [`
    @keyframes rotate-360 {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    div.spinner {
      color: #333;
      font-size: 18px;
      font-family: sans-serif;
    }

    div.spinner:before {
      display: inline-block;
      content: '';
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: solid 2px #ccc;
      border-bottom-color: #66c;
      animation: rotate-360 1s linear infinite;
      margin-right: 6px;
      vertical-align: bottom;
    }
  `]
})
export class SpinnerComponent {}
