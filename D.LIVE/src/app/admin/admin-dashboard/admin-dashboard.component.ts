import { Component, OnInit } from '@angular/core';

import { ActivatedRoute }       from '@angular/router';
import { Observable }           from 'rxjs/Observable';
import { SelectivePreloadStrategyService } from '../../shared/selective-preload-strategy.service';
import { HitService } from '../../shared/hit.service';
import { Hit } from '../../common/interfaces/hit.interface';


import 'rxjs/add/operator/map';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;
  modules: string[];

  constructor(
    private route: ActivatedRoute,
    private preloadStrategy: SelectivePreloadStrategyService,
    private hit: HitService
  ) {
    this.modules = preloadStrategy.preloadedModules;
  }

  ngOnInit() {
    // Capture the session ID if available
    this.sessionId = this.route
      .queryParams
      .map(params => params['session_id'] || 'None');

    // Capture the fragment if available
    this.token = this.route
      .fragment
      .map(fragment => fragment || 'None');
  }

  getHits() {
    console.log("Hitting: "+  + " times")
    let hitsPromise = Promise.resolve(this.hit.getHits());
    hitsPromise.then(hits => hits.find(hit => hit.concat.name === 'hints'));
    
  }
}