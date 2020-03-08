import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {LayoutModule} from '@angular/cdk/layout';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { PaletteComponent } from './palette/palette.component';
import { GradientSelectorComponent } from './gradient-selector/gradient-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    PaletteComponent,
    GradientSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
