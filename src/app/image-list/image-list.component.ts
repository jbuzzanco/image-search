import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[];

  constructor(private _imageService : ImageService) { }

  searchImages(query: string){
    return this._imageService.getImage(query).subscribe(
      data => console.log(data, "is data"),
      error => console.log (error, "is error"),
      () => console.log("Request Complete")
    )
  }

  ngOnInit() {
  }

}
