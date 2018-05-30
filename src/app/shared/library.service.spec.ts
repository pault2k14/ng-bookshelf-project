/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {LibraryService} from './library.service';
import {Book} from './book';

function createBookFixture(book_id) {
  return new Book(
    book_id,
    'title',
    'subTitle:',
    ['authors'],
    'publisher',
    'publishDate',
    'description',
    ['categories'],
    'thumbnail',
    'smallThumbnail'
  )
}

describe('LibraryService', () => {
  let libraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryService]
    });
    libraryService = TestBed.get(LibraryService);
  });


  it('can add a book to the library', () => {
    const book: Book = createBookFixture('abcd123');
    libraryService.addBook(book);
    expect(libraryService.books.length).toBe(1);
    expect(libraryService.books[0].id).toBe('abcd123');
  });

  it('can remove a book to the library', () => {
    const book: Book = createBookFixture('abcd123');
    libraryService.books.push(book);
    libraryService.removeBook(book);
    expect(libraryService.books.length).toBe(0);
  });

  it('checks if a book is already in the library', () => {
    const book: Book = createBookFixture('abcd123');
    libraryService.books.push(book);
    expect(libraryService.hasBook(book)).toBe(true);
  });

  it('can save and load the books', () => {
    const book: Book = createBookFixture('abcd123');
    libraryService.books.push(book);
    libraryService.save();

    let savedBooks = localStorage.getItem('books');
    savedBooks = JSON.parse(savedBooks);
    expect(savedBooks.length).toBe(1);

    libraryService.books = [];
    libraryService.load();
    expect(libraryService.books.length).toBe(1);
  });
});
