import { Component, OnInit } from '@angular/core';
import { AppStateI } from '../../../store/AppState';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadingStateI } from 'src/store/loadingState/loadingState';

@Component({
  selector: 'app-loader',
  templateUrl: './loader-c.component.html',
  styleUrls: ['./loader-c.component.scss'],
})
export class LoaderCComponent implements OnInit {

  loadingState$: Observable<loadingStateI>;
  constructor(private store: Store<AppStateI>) { }

  ngOnInit() {
    this.loadingState$ = this.store.select('loading');
  }

}
