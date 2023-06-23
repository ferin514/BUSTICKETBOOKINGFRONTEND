import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{






  currentSlideIndex = 0;
  slides: string[] = [
    'assets/image/online_bus_ticket_booking.gif',
    'assets/image/MicrosoftTeams-image.png',
    'assets/image/bus image.jpg',
    'assets/image/bus images.jpg'
  ];

  ngOnInit() {
    setInterval(() => {
      this.changeSlide(1);
    }, 3000);
  }

  changeSlide(n: number) {
    this.currentSlideIndex += n;
    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = this.slides.length - 1;
    } else if (this.currentSlideIndex >= this.slides.length) {
      this.currentSlideIndex = 0;
    }
  }
}

