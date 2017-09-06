import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
// NgModules
import { SharedModule } from './shared/shared.module';
import { GiphyModule } from './giphy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    GiphyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
