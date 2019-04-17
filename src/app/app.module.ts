import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AoneComponent } from './aone/aone.component';
import { BoneComponent } from './bone/bone.component';
import { ConeComponent } from './cone/cone.component';

@NgModule({
  declarations: [
    AppComponent,
    AoneComponent,
    BoneComponent,
    ConeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
