import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchJobService {
  constructor() {}
  private searchTermSubject = new BehaviorSubject<string>(''); 
  searchTerm$ = this.searchTermSubject.asObservable();
  /* pass filter query form compoments to compoments */
  updateSearchTerm(term: string) {
    this.searchTermSubject.next(term);
  }
}
