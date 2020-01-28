import {Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'create-recipe',
  templateUrl: './createRecipe.component.html',
  styleUrls: ['./createRecipe.component.scss']
})

export class CreateRecipeComponent implements OnInit {

  @ViewChild('preview', {static: false}) preview: ElementRef;
  fileData: File = null;
  isShowPreviewImage: boolean;
  model: any;

  constructor(private formBuilder: FormBuilder) {
    this.isShowPreviewImage = false;
  }

  ngOnInit(): void {
    this.model = this.formBuilder.group({
      name: ['', Validators.required],
      ingredients: this.formBuilder.array([
        this.formBuilder.group({
          name: ['', Validators.required],
          quantity: ['', Validators.required]
        })
      ]),
      description: [''],
      steps: this.formBuilder.array([
        this.formBuilder.group({
          stepDescription: ['', Validators.required]
        })
      ])
    });
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

  addIngredient(): void {
    this.model.get('ingredients').push(this.formBuilder.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required]
    }));
    console.log(this.model.value);
  }

  addStep(): void {
    this.model.get('steps').push(this.formBuilder.group({
      stepDescription: ['', Validators.required]
    }));
  }
}
