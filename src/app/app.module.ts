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

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    PersonalityMatchComponent,
    SuggestedMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, 
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(fromMovie.moviesFeatureKey, fromMovie.reducer),
    EffectsModule.forRoot([MovieEffects]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
