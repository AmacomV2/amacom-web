import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { AuthService, Role } from '@core';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  authForm!: UntypedFormGroup;
  submitted = false;
  loading = false;
  error = '';
  hide = true;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    super();
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    //TODO: remove this later
    this.authForm.patchValue({
      username: 'superadmin',
      password: 'superadmin@123',
    })
  }
  get f() {
    return this.authForm.controls;
  }
  adminSet() {
    this.authForm.get('username')?.setValue('admin@hospital.org');
    this.authForm.get('password')?.setValue('admin@123');
  }
  doctorSet() {
    this.authForm.get('username')?.setValue('doctor@hospital.org');
    this.authForm.get('password')?.setValue('doctor@123');
  }
  patientSet() {
    this.authForm.get('username')?.setValue('patient@hospital.org');
    this.authForm.get('password')?.setValue('patient@123');
  }
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.error = '';
    if (this.authForm.invalid) {
      this.error = 'Username and Password not valid !';
      return;
    } else {
      this.subs.sink = this.authService
        .login(this.f['username'].value, this.f['password'].value)
        .subscribe({
          next: (res) => {
            console.log(res);
            if (res) {
              setTimeout(() => {
                const role = this.authService.currentUserValue.role;
                console.log(role);
                if (role === Role.All || role === Role.Admin) {
                  this.router.navigate(['/admin/dashboard/main']);
                } else if (role === Role.Doctor) {
                  this.router.navigate(['/doctor/dashboard']);
                } else if (role === Role.Patient) {
                  this.router.navigate(['/patient/dashboard']);
                } else {
                  this.router.navigate(['/authentication/signin']);
                }
                this.loading = false;
              }, 1000);
            } else {
              this.error = 'Invalid Login';
            }
          },
          error: (error) => {
            this.error = error;
            this.submitted = false;
            this.loading = false;
          },
        });
    }
  }
}
