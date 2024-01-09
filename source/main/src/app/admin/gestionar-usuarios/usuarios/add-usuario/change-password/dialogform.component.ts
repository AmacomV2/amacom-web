import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-dialogform',
  templateUrl: './dialogform.component.html',
  styleUrls: ['./dialogform.component.scss'],
})
export class DialogformComponent implements OnInit {
  public fname = 'John';
  public lname = 'Deo';
  hide = true;
  chide = true;
  public addCusForm!: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder, public dialog: MatDialog) {}
  public ngOnInit(): void {
    this.addCusForm = this.fb.group({
      IdProof: null,
      firstname: [
        this.fname,
        [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')],
      ],
      lastname: [
        this.lname,
        [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')],
      ],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      cpassword: [null, [Validators.required]],
    });
  }
  closeDialog(): void {
    this.dialog.closeAll();
  }
  onSubmitClick() {
    console.log('Form Value', this.addCusForm?.value);
  }
}
