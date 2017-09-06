import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GiphyComponent } from './component';
import { GiphyViewComponent } from './view';
import { GiphyErrorComponent } from './error';
import { GiphyImageComponent } from './image';
import { GiphySearchComponent } from './search';
import { GiphyService } from './service';
// NgModules
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
    HttpModule,
    SharedModule
  ],
  exports: [
    GiphyComponent
  ],
  declarations: [
    GiphyComponent,
    GiphyViewComponent,
    GiphyErrorComponent,
    GiphyImageComponent,
    GiphySearchComponent
  ],
  providers: [GiphyService],
})
export class GiphyModule { }
