import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  isLoading: boolean;

  constructor(private fb: FormBuilder,
  private router: Router,
  private userService: UserService) {  }

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.signInForm = this.fb.group({
      u_email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      u_password: ['', Validators.required]
    });
  }

  signIn() {
    this.isLoading = true;
    if (this.signInForm.valid) {
      this.userService.signIn(this.signInForm.value).subscribe(data => {
        if (data.obj_response.status === 201 ) {
          this.router.navigate(['restaurants']);
        }
      }, error => {
        this.isLoading = false;
      });
    }
  }
}
