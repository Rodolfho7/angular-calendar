import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReminderComponent } from './reminder.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ ReminderComponent ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class ReminderModule { }
