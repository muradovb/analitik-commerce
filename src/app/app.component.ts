import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng-commerce-app';

  constructor(private router: Router, private route: ActivatedRoute) { }

  isHomeRoute(): boolean {
    return this.router.url === '/';
  }
}