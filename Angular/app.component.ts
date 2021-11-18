import { Component, OnInit } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Student-Colab';

  clicked : boolean = true;


  typewriter_display: string = "";
  text: string[] = ['Welcome to Student Colab....', 'The all in one place to work together', 'Manage Clubs comprehensively...'];
  counter:number = 0; 
  index_counter:number = 0;
  ngOnInit() {
    
    this.typingCallback(this);
    
  }
  typingCallback(that) {
    let total_length = that.text[that.index_counter].length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.text[that.index_counter][current_length];
      setTimeout(that.typingCallback, 250, that);
    } else {
      that.typewriter_display = "";
      that.index_counter++;
      if(that.index_counter == 3) {that.index_counter = 0;}
    }
    //this.counter++;
    
    setInterval(this.typingCallback, 2900, this);
    
  }
  
  hide_title(){
    this.clicked = false;
   }

   
   imageObject: Array<object> = [
      {
        image: 'assets/home/Home-background.png',
          thumbImage: 'assets/home/Home-background.png',
          alt: 'bgimg_1',
      },
      {
        image: 'assets/home/bgimg_4.png',
          thumbImage: 'assets/home/bgimg_4.png',
          alt: 'bgimg_4',
      },
      {
        image: 'assets/home/bgimg_5.PNG',
          thumbImage: 'assets/home/bgimg_5.PNG',
          alt: 'bgimg_5',
      },
      {
        image: 'assets/home/bgimg_6.webp',
          thumbImage: 'assets/home/bgimg_6.webp',
          alt: 'bgimg_6',
      },
      {
        image: 'assets/home/bgimg_7.webp',
          thumbImage: 'assets/home/bgimg_7.webp',
          alt: 'bgimg_7',
      },
      {
        image: 'assets/home/bgimg_8.jpg',
          thumbImage: 'assets/home/bgimg_8.jpg',
          alt: 'bgimg_8',
      }
      
    ];

    
}
