import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component ({
    selector: 'bc-book-search',
    templateUrl: './book-search.html',
    styles: [`
    md-card-title,
    md-card-content {
      display: flex;
      justify-content: center;
    }

    input {
      width: 300px;
    }

    md-card-spinner {
      padding-left: 60px; // Make room for the spinner
    }

    md-spinner {
      width: 30px;
      height: 30px;
      position: relative;
      top: 10px;
      left: 10px;
      opacity: 0.0;
    }

    md-spinner.show {
      opacity: 1.0;
    }
  `]
})

export class BookSearchComponent {
    @Input() query = '';
    @Input() searching = false;
    @Output() search = new EventEmitter<string>();
}