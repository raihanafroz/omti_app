import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
     this.loadScript();
  }
  public loadScript(): void {
    const script = document.createElement('script');
    script.src = 'assets/js/main.js';
    script.onload = () => {
      // Initialize any functions defined in the external JS file
    };
    document.body.appendChild(script);
  }
}