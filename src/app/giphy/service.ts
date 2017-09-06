import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GiphyService {
  private apiKey = '9e896b1fb19845a3a56c31eeaa5a44a1';

  constructor(private http: Http) { }

  random(search: string): Observable<string> {
    return this.http
      .get(this.randomUrl(search))
      .map(response => response.json())
      .map(({ data }) => data.fixed_height_downsampled_url);
  }

  private randomUrl(search: string): string {
    return `https://api.giphy.com/v1/gifs/random?api_key=${this.apiKey}&tag=${search}`;
  }
}
