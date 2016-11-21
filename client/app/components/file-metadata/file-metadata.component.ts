import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-metadata',
  templateUrl: './file-metadata.view.html',
  styleUrls: ['./file-metadata.view.css']
})

export class FileMetadataComponent implements OnInit {

  private fileMetadataURL = 'api/search?t=';
  private latestURL = 'api/latest';
  searchQuery: string = '';
  searchOffset: number;
  queryString: string = '';
  apiCallString: string = 'http://' + document.domain + '/' + this.fileMetadataURL;
  responseJSON: [{}];
  latestJSON: [{}];
  responseLoading: boolean = false;
  latestLoading: boolean = false;

  searchButtonClicked(searchTerm: string): void {
    this.responseLoading = true;
  }

  jsonToString(json: {}): string {
    return JSON.stringify(json);
  }

  clearResponseJSON(): void {
    this.responseJSON = [{}];
  }

  ngOnInit(): void {
    // this.getFileMetadataResults();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred - file-search.component', error); // Needs to be improved
    return Promise.reject(error.message || error);
  }
 }