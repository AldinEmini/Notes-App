import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  note: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>([])

  constructor() {
    const saveNotes = localStorage.getItem('notes')
    if(saveNotes){
      this.note.next(JSON.parse(saveNotes))
    }
  
    this.note.subscribe((notesArray: Note[]) => {
      localStorage.setItem('notes' , JSON.stringify(notesArray))

    })
  }

  createNote(newNote: Note) {
    this.note
    .pipe(take(1))
    .subscribe((notesArray: Note[]) => {
      notesArray.unshift(newNote)
      this.note.next(notesArray)

    })


  }

  getNotes(): Observable<Note[]> {
    return this.note;
    
  }

  deleteNote(noteId: number) {
    this.note
    .pipe(take(1))
    .subscribe((notesArray: Note[]) => {
      notesArray.splice(noteId , 1)
      this.note.next(notesArray)
  })

  }
}
