import { Component, Input, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { AbstractControl } from '@angular/forms';

@Component({
  templateUrl: './user-changing-password-dialog.component.html',
  styleUrls: ['./user-changing-password-dialog.component.css']
})
export class UserChangingPasswordDialogComponent implements OnInit {
  edit: boolean;
  user: User;
  password: string;
  confirmPassword: string;
  passwordError: string;

  constructor(public dialogRef: MatDialogRef<UserChangingPasswordDialogComponent>,
    private userService: UserService) {
  }

  ngOnInit(): void {
    if (!this.user) {
      this.user = { mobile: undefined, username: '' };
    }
  }

  isPasswordInvalid(): boolean {
    return ((this.password !== this.confirmPassword));
  }

  save(): void {

    this.userService.putObservable(this.user).subscribe(
      data => this.dialogRef.close()
    );
  }
}
