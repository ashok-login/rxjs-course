import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { concat, interval, noop, Observable, of } from 'rxjs';
import { createHttpObservable } from '../common/util';
import { concatMap, map } from 'rxjs/operators';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: false
})
export class AboutComponent implements OnInit {

  ngOnInit() {

  }
}
