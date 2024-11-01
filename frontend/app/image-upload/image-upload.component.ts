import { Component } from '@angular/core';
import { ImageUploadService } from './image-upload.service';

export class ImageUploadComponent {
  selectedFile: File | null = null;
  response: string | null = null;

  constructor(private imageUploadService: ImageUploadService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      this.imageUploadService.uploadImage(this.selectedFile).subscribe(
        (data) => {
          this.response = data;
        },
        (error) => {
          console.error('Error uploading image', error);
        }
      );
    }
  }
}
