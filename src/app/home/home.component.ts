import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
      delay: 10000
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    spaceBetween: 0,
    autoHeight: true,
    preloadImages: true,
    loop: true,
  };
  images: string[] = ['assets/image1.jpg', 'assets/image2.jpg', 'assets/image3.jpg'];
  constructor() { }

  ngOnInit(): void {
  }

}
