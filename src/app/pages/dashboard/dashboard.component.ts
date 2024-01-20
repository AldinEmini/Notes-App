import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../interfaces/note';
import { DashboardCardComponent } from '../../Components/Dashboard-Card/Dashboard-Card.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule , DashboardCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  noteService = inject(NotesService)
  allNotes: Note[] | undefined;


  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes: Note[]) => {
      this.allNotes = notes;
      console.log(this.allNotes)
      


    })

  }

}
