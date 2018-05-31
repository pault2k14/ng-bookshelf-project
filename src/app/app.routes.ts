import {Routes} from "@angular/router";
import {BookComponent} from './book/book.component';
import {PagerComponent} from './pager/pager.component';
import {HeaderComponent} from './header/header.component';
import {AppComponent} from './app.component';
import {BookListComponent} from './book-list/book-list.component';
import {SearchComponent} from './search/search.component';
import {LibraryComponent} from './library/library.component';

export const routes: Routes = [
  {path: '', redirectTo: 'library', pathMatch: 'full'},
  {path: 'library', component: LibraryComponent},
  {path: 'search', component: SearchComponent},
  {path: 'book/:bookid', component: BookComponent}
];
