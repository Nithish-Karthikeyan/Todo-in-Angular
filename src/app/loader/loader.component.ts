import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
    isLoading: Subject<boolean> = this.loadService.loading;

  constructor(private loadService: LoaderService) {
  }

}