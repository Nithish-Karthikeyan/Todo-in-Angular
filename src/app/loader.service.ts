import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  loading = new Subject<boolean> ;

  constructor() { }

  setLoading() {
    this.loading.next(true);
  }

  getLoading() {
    this.loading.next(false);
  }
}