import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue-form',
  templateUrl: './dialogue-form.component.html',
  styleUrls: ['./dialogue-form.component.css'],
})
export class DialogueFormComponent implements OnInit {
  success = false;
  failure = false;
  inTouch = false;
  output = false;

  constructor(
    public dialogRef: MatDialogRef<DialogueFormComponent>,
    @Inject(MAT_DIALOG_DATA) config
  ) {
    if (config.type == 'intouch') {
      this.inTouch = true;
    } else if (config.type == 'consultation') {
      this.inTouch = false;
    }
  }

  ngOnInit(): void {
  }

  sendEmail() {
    console.log('In email');
  }

  close() {
    // send event saying sucess or failure
    this.dialogRef.close({ event: 'success' });
  }

  cancel() {
    this.dialogRef.close({ event: 'close' });
  }
}
