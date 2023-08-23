
export { LoginPageComponent } from 'src/app/components/login-page/login-page.component';
export { NoteCreatePageComponent } from 'src/app/components/note-create-page/note-create-page.component';
export { NoteListPageComponent } from 'src/app/components/note-list-page/note-list-page.component';


export const COMMON_IMPORTS = []

export interface Note {
    id: string,
    content: string,
}