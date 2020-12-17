import { Component, OnInit } from '@angular/core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: '<app-danger-alert>',
  templateUrl: './danger-alert.component.html',
  styleUrls: ['./danger-alert.component.css']
})
export class DangerAlertComponent implements OnInit {
  dangerIcon = faExclamationTriangle;

  constructor() { }

  ngOnInit(): void {
  }

}
