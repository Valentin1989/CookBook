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
    this.model.get('ingredients').valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  onSelectFile(fileInput: any): void {
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
  }

  addStep(): void {
    this.model.get('steps').push(this.formBuilder.group({
      stepDescription: ['', Validators.required]
    }));
  }

  isShowAddButton(itemIndex: number): boolean {
    const result = this.model.get('ingredients').controls.length === itemIndex;
    return result;
  }

  removeIngredientItem(itemIndex: number): void {
    this.model.get('ingredients').controls.splice(itemIndex, 1);
  }

  isDisabledRemoveIngredientsItem(): boolean {
    const result = this.model.get('ingredients').controls.length === 1;
    return result;
  }
}
