import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NoteCreatePageComponent } from '../note-create-page/note-create-page.component';
import { Note } from '@app';

@Component({
  selector: 'app-note-list-page',
  templateUrl: './note-list-page.component.html',
  styleUrls: ['./note-list-page.component.scss'],
  standalone: true,
  imports: [CommonModule, NoteCreatePageComponent]
})
export class NoteListPageComponent implements OnInit {

  notes: Note[] = [];
  currentNote: Note;
  panelShown: boolean = true;

  
  createNew() {
    this.currentNote = {
      content: '',
      id: `${+new Date()}`
    }

    this.notes.push(this.currentNote);
  }

  selectNote(id: string) {
    const selected = this.notes.find(note => note.id === id);

    if(!selected) {
      return;
    }

    this.currentNote = selected;
  }

  toggleSlider() {
    this.panelShown = !this.panelShown;
    console.log(this.panelShown);
  }

  ngOnInit(): void {
    this.createNew();
  }
}