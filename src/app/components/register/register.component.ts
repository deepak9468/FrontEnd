import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user: User = new User(0,'', '','',null);
  constructor(private authService: AuthServiceService, private router: Router){}

  onSubmit(): void {
    this.authService.saveUserData(this.user);
    console.log(this.authService.getStoredUsers());
    this.router.navigate(['/login']);
  }
}
