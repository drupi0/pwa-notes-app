import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCreatePageComponent } from './note-create-page.component';

describe('NoteCreatePageComponent', () => {
  let component: NoteCreatePageComponent;
  let fixture: ComponentFixture<NoteCreatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteCreatePageComponent]
    });
    fixture = TestBed.createComponent(NoteCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
