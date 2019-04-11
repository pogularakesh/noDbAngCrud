import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
 import {HttpClientModule}from '@angular/common/http';

import {MatButtonModule,MatIconModule,MatPaginatorModule,MatDialogModule} from '@angular/material'
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { DialogComponent } from './dialog/dialog.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ShowComponent,
    DialogComponent,
    EditComponent
    ],
  imports: [
    BrowserModule,HttpClientModule,MatButtonModule,MatIconModule,MatPaginatorModule,
    AppRoutingModule,FormsModule,MatDialogModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[EditComponent]
})
export class AppModule { }
