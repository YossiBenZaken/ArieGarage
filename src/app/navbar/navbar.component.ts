import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
      if (!menuOpen) {
        menuBtn.classList.add('open');
      }
      else {
        menuBtn.classList.remove('open');
      }
      menuOpen = !menuOpen;
    });
  }
}
