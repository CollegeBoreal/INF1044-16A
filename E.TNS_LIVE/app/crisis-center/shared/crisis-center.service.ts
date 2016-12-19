import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CrisisCenter } from './crisis-center.model';

@Injectable()
export class CrisisCenterService {

	constructor(private http: Http) { }

	getList(): Observable<CrisisCenter[]> {
		return this.http.get('/api/list').map(res => res.json() as CrisisCenter[]);
	}
}