import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly route: Router) {}
  entries = [
    {
      name: 'Login',
      link: 'login'
    },
    {
      name: 'Register',
      link: 'register'
    }
  ]
  title = 'blog-app';

  navigateTo(value) {
    // console.log(value)
    this.route.navigate([value])
  }
}
