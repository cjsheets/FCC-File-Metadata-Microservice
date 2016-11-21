import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FileMetadataService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getFileResults(searchQuery: string): Promise<[{}]> {
      console.log(searchQuery);
      return this.http.get(searchQuery)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred - file-metadata.service', error); // Needs to be improved
    return Promise.reject(error.message || error);
  }
 }