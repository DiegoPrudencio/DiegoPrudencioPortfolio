import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  backToTheTop: boolean = false;

  ngOnInit(): void {

  // if (this.backToTheTop = true) {
  //   this.backToTheTop.addEventListener("click", function() {
  //     window.scrollTo(0, 0);
  // });
    
  // }

// var btn = document.querySelector("#back-to-top");


}

}
