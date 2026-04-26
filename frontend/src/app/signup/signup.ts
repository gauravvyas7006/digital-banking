import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  User = {
    name: '',
    email: '',
    password: ''
  };
  constructor(private authService: AuthService) {}
  onSubmit(){
    this.authService.signup(this.User).subscribe({ 
      next: (response) => {
        console.log('Signup successful', response);
      },
      error: (error) => {
        console.error('Signup failed', error);
      }
    });
  }
}
