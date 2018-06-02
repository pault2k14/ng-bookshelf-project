import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GoogleBooksService} from '../shared/google-books.service';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  @Input()
  private page = 1;

  @Input()
  private totalPages = 0;

  @Output()
  private changePage: EventEmitter<number> = new EventEmitter<number>();

  constructor(private googleBookService: GoogleBooksService) {
  }

  next() {
      this.changePage.emit(this.page + 1);
  }

  prev() {
    this.changePage.emit(this.page - 1);
  }


  ngOnInit() {
  }

}
