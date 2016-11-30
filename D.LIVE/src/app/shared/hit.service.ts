import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Hit }           from '../common/interfaces/hit.interface';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class HitService {
  private hitsUrl = 'http://208.75.75.61:5000/redis';   // URL to web API
  constructor (private http: Http) {}
  getHits (): Observable<Hit[]> {
    let headers = new Headers([{ 'Content-Type': 'application/json' }, {"isTrusted":false}]);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.hitsUrl, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
