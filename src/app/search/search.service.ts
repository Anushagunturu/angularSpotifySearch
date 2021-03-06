import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

	clientID: string = 'd25124e484a045e8a67507d92c8da950';
	baseUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id=' + this.clientID + '&q=';

  constructor(private _http: Http) { }


  search(queryString: string) {
      let _URL = this.baseUrl + queryString;
      return this._http.get(_URL);
  }

}
