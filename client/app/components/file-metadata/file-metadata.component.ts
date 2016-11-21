import { Component, OnInit } from '@angular/core';
import { FileMetadataService } from './file-metadata.service';

@Component({
  selector: 'app-file-metadata',
  templateUrl: './file-metadata.view.html',
  styleUrls: ['./file-metadata.view.css'],
  providers: [ FileMetadataService ]
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

  constructor(private fileMetadataService: FileMetadataService) { }

  searchButtonClicked(searchTerm: string): void {
    this.responseLoading = true;
    this.getFileMetadataResults();
  }

  getFileMetadataResults(): void {
    if(this.searchQuery) {
      this.queryString = (this.searchOffset > 0) ? 
        this.searchQuery + '&o=' + this.searchOffset : this.searchQuery;
      this.fileMetadataService.getFileResults(this.fileMetadataURL + this.queryString)
        .then(response => {
          console.log(response);
          this.responseJSON = response;
          this.responseLoading = false;
          this.getLatestMetadataes();
        })
        .catch(this.handleError);
    } else {

    }
  }

  getLatestMetadataes(): void {
    this.fileMetadataService.getFileResults(this.latestURL)
      .then(response => {
        this.latestJSON = response;
        this.latestLoading = false;
        console.log(response);
      })
  }

  jsonToString(json: {}): string {
    return JSON.stringify(json);
  }

  clearResponseJSON(): void {
    this.responseJSON = [{}];
  }

  changeOffset(): void {
    this.searchOffset = (this.searchOffset > 0) ? this.searchOffset : null;
  }

  incrementOffset(): void {
    this.searchOffset = (this.searchOffset) ? this.searchOffset + 1 : 1;
    this.changeOffset();
  }

  decrementOffset(): void {
    this.searchOffset = this.searchOffset - 1;
    this.changeOffset();
  }

  ngOnInit(): void {
    // this.getFileMetadataResults();
    this.latestLoading = true;
    this.getLatestMetadataes();
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred - file-search.component', error); // Needs to be improved
    return Promise.reject(error.message || error);
  }
 }