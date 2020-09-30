import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { GalleryComponent } from './gallery/gallery.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      GalleryComponent,
      OurServiceComponent,
      AboutComponent,
      ContactUsComponent,
      AdminComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      NgxUsefulSwiperModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule,
      AppRoutingModule,
      InputTextModule,
      FormsModule,
      ReactiveFormsModule,
      InputTextareaModule,
      ButtonModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
