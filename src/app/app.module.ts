import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromMovie from './store/reducers/movie.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './store/effects/effects/movie.effects';
import { PersonalityMatchComponent } from './personality-match/personality-match.component';
import { SuggestedMediaComponent } from './suggested-media/suggested-media.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonalityMatchComponent,
    SuggestedMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(fromMovie.moviesFeatureKey, fromMovie.reducer),
    EffectsModule.forRoot([MovieEffects]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
