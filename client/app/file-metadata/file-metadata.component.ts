import { Component } from '@angular/core';

import { MultipartItem } from "../shared/plugin/multipart-item";
import { MultipartUploader } from "../shared/plugin/multipart-uploader";

const URL = '/api/upload';

@Component({
  selector: 'file-metadata',
  templateUrl: './file-metadata.view.html',
  styleUrls: ['./file-metadata.view.scss'] 
})
export class FileMetadataComponent {
	private uploader:MultipartUploader = new MultipartUploader({url: URL});

	multipartItem:MultipartItem = new MultipartItem(this.uploader);

	filename:string;
	file: File;
	fileMetadataKeys: string[];
	fileMetadata: {};
	uploadMetadataKeys: string[];
	uploadMetadata: {};
                                                                                                               
	upload : () => void;
	uploadCallback : (data: any) => void;

	constructor(){
		this.upload = () => {
			console.debug("home.ts & upload() ==>");
			if (this.multipartItem == null){
				this.multipartItem = new MultipartItem(this.uploader);
			}
			if (this.multipartItem.formData == null)
				this.multipartItem.formData = new FormData();

			this.multipartItem.formData.append("filename",  this.filename);
			this.multipartItem.formData.append("file",  this.file);

			this.multipartItem.callback = this.uploadCallback;
			this.multipartItem.upload();
		}

		this.uploadCallback = (data) => {
			console.debug("home.ts & uploadCallback() ==>");
			this.file = null;
			if (data){
      this.uploadMetadata = JSON.parse(data);
      this.uploadMetadataKeys = Object.keys(this.uploadMetadata);
				console.debug("home.ts & uploadCallback() upload file success.");
			}else{
				console.error("home.ts & uploadCallback() upload file false.");
			}
		}


	}

	selectFile($event: any): void {
		var inputValue = $event.target;
		if( null == inputValue || null == inputValue.files[0]){
			console.debug("Input file error.");
			return;
		}else {
			this.file = inputValue.files[0];
      this.fileMetadata = {
        Name: this.file.name,
        Size: String(this.file.size),
        Date: String(this.file.lastModifiedDate),
        Type: this.file.type
      };
      this.fileMetadataKeys = Object.keys(this.fileMetadata);
		}
	}
}