import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Note } from '../../interfaces/note';

@Component({
  selector: 'app-Dashboard-Card',
  standalone:true,
  imports: [RouterModule],
  templateUrl: './Dashboard-Card.component.html',
  styleUrls: ['./Dashboard-Card.component.scss']
})
export class DashboardCardComponent implements OnInit {
@Input() note!: Note;
@Input() i!: number

  constructor() { }

  ngOnInit() {
  }

}
