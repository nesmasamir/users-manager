import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrxProject';
  constructor(private router: Router) { }

  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectPath = urlParams.get('redirect');

    if (redirectPath) {
      // Remove the query parameter and navigate to the saved route
      this.router.navigateByUrl(redirectPath);
    }
  }
}

