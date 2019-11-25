import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Image } from '../../_models';
@Component({
    selector: 'pic',
    template: `
      <li class="list-group-item mb-2" [ngClass]="{ 'active': image.id == selectedImage }" (click)="selectImage(image.id)">
        <div class="row">
        <div *ngIf="selectedImage == image.id" class="col-12 mb-3">
          <img src="img-fluid" src="{{ image.url }}" alt="image.title" class="img-fluid" />
        </div>
        <div [ngClass]="{ 'col-8': image.id != selectedImage, 'col-12': image.id == selectedImage }">{{ image.title }}</div>
        <div *ngIf="image.id != selectedImage" class="col-4"><img class="img-fluid img-thumbnail" src="{{ image.thumbnailUrl }}" alt="{{ image.title }}" /></div>
        </div>
      </li>
    `,
  })
  export class PictureComponent {
    @Input() image: Image;
    @Input() selectedImage: number;

    @Output() imageSelected = new EventEmitter();

    selectImage(id:number) {
      this.imageSelected.emit(id);
    }
  }