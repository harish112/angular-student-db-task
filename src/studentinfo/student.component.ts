import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './studentinfo.component.html',
  styleUrls: ['./studentinfo.component.css'],
})
export class StudentinfoComponent implements OnInit {
  ngOnInit(): void {}
  studentName: string = 'Harish Kumar';
  studentId: number = 26829;
  studentCollege: string = 'Pondicherry University';
  studentCity: string = 'Puducherry';
  studentState: string = 'Puducherry';
  studentPincode: number = 605011;
}
