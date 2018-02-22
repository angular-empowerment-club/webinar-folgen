import { Component } from '@angular/core';
import { UserService } from './user-service.service';

@Component({
  selector: 'aec-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(userService: UserService) {}
}
