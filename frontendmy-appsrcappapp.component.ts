import { Component } from '@angular/core';
import { UploadService } from './image-upload/upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFile: File | null = null;
  responseMessage: string = '';

  constructor(private uploadService: UploadService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      this.uploadService.uploadFile(this.selectedFile)
        .subscribe(
          (response: any) => {
            this.responseMessage = response.message || 'Upload successful!';
          },
          (error) => {
            this.responseMessage = 'Upload failed!';
          }
        );
    }
  }
}
