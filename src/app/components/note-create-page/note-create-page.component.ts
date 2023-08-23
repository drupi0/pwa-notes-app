import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from '@app';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-note-create-page',
  templateUrl: './note-create-page.component.html',
  styleUrls: ['./note-create-page.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class NoteCreatePageComponent {

  @Input()
  note: Note;

  @Output()
  noteChange: EventEmitter<Note> = new EventEmitter();


  @Output()
  delete: EventEmitter<Note> = new EventEmitter();

  @Output()
  share: EventEmitter<Note> = new EventEmitter();

  @Output()
  slider: EventEmitter<void> = new EventEmitter();

  deleteNote() {
    this.delete.emit(this.note);
  }

  shareNote() {
    this.share.emit(this.note)
  }

  toggle() {
    this.slider.emit();
  }

  emitChanges(content: string) {
    this.note.content = content;
    this.noteChange.next(this.note);
  }
}
