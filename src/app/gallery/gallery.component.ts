import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 10000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    spaceBetween: 0,
    autoHeight: true,
    preloadImages: true,
    loop: true,
  };
  images: string[] = [
    'assets/gallery/1.jpeg',
    'assets/gallery/2.jpeg',
    'assets/gallery/3.jpeg',
    'assets/gallery/4.jpeg',
    'assets/gallery/5.jpeg',
    'assets/gallery/6.jpeg',
    'assets/gallery/7.jpeg',
    'assets/gallery/8.jpeg',
    'assets/gallery/9.jpeg'
  ];
  constructor() {}
}
