import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'Home' }
  },
  {
    path: 'gallery',
    component: GalleryComponent,
    data: { animation: 'Gallery' }
  },
  {
    path: 'our-service',
    component: OurServiceComponent,
    data: { animation: 'OurService' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'About' }
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    data: { animation: 'ContactUs' }

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
