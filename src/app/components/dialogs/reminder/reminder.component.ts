import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reminder } from '@interfaces/reminder';
import { cardListColors } from '@interfaces/card-colors.name';
import { DateService } from '@services/date.service';


@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent {

  reminder: FormGroup;
  selectedColor: string | undefined = '';
  cardListColors = cardListColors;

  constructor(
    public dialogRef: MatDialogRef<ReminderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Reminder,
    private fb: FormBuilder,
    private dateService: DateService
  ) {
    const date = this.data?.dateTime;
    const fixedData = date ? this.dateService.convertToDateTime(new Date(date)) : null;
    this.reminder = this.fb.group({
      text: [this.data?.text, Validators.required],
      dateTime: [fixedData, Validators.required],
      color: [this.data?.color, Validators.required]
    });
  }

  setSelectedColor(): void {
    this.selectedColor = this.cardListColors.find((c) => c.value == this.data?.color)?.name;
  }

  setColor(color: { value: string, name: string }): void {
    if (!this.reminder) {
      return;
    }
    this.reminder.get('color')?.setValue(color.value);
    this.selectedColor = color.name;
  }

  deleteReminder() {

  }

  save() {
    console.log(this.reminder.value);
  }

  closeModal() {
    this.dialogRef.close();
  }
}
