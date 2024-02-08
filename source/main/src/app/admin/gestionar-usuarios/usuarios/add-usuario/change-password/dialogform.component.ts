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

  public form!: UntypedFormGroup;
  constructor(private fb: UntypedFormBuilder, public dialog: MatDialog) {}
  public ngOnInit(): void {
    this.form = this.fb.group({
      newPassword: [null, [Validators.required]],
      oldPassword: [null, [Validators.required]],
    });
  }
}
