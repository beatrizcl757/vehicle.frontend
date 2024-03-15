import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from `@angular/forms`;


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleInputComponent } from './vehicle-input/vehicle-input.component';
import { VehicleDisplayComponent } from './vehicle-display/vehicle-display.component';
import { VehicleEditComponent } from './vehicle-edit/vehicle-edit.component';
import { VehicleWrapperComponent } from './vehicle-wrapper/vehicle-wrapper.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthContentComponent } from './auth-content/auth-content.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ContentComponent } from './content/content.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { WelcomeContentComponent } from './welcome-content/welcome-content.component';
import { AxiosService } from './axios.service';
import { VehiclePageComponent } from './vehicle-page/vehicle-page.component';

@NgModule({

  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    VehicleInputComponent,
    VehicleDisplayComponent,
    VehicleEditComponent,
    VehicleWrapperComponent,
    AppRoutingModule,
    FormsModule,

  ],
  declarations: [
      AppComponent,
      AuthContentComponent,
      ButtonsComponent,
      ContentComponent,
      LoginFormComponent,
      WelcomeContentComponent,
      VehiclePageComponent,

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [AxiosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
