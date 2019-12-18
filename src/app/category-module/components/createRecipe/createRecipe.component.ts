import {Component, ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'create-recipe',
  templateUrl: './createRecipe.component.html',
  styleUrls: ['./createRecipe.component.scss']
})

export class CreateRecipeComponent {

  @ViewChild('preview', {static: false}) preview: ElementRef;
  fileData: File = null;
  isShowPreviewImage: boolean;

  constructor() {
    this.isShowPreviewImage = false;
  }

   onSelectFile(fileInput: any) {
     this.fileData = fileInput.target.files[0];
     if (!this.fileData) {
       this.preview.nativeElement.src = '';
       this.isShowPreviewImage = false;
       return;
     }
     const mimeType = this.fileData.type;
     if (mimeType.match(/image\/*/) == null) {
       return;
     }
     const reader  = new FileReader();
     reader.onload = () => {
       this.preview.nativeElement.src = reader.result;
     };

     if (this.fileData) {
       this.isShowPreviewImage = true;
       reader.readAsDataURL(this.fileData);
    }
  }
}
