import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { ImageComponent } from '../../_components/image/image.component'

import { Album, Image } from '../../_models';
import { AuthenticationService, AlbumService, ImageService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    albums: Album[];
    images: Image[];
    selectedAlbum: Album;
    selectedImage: Number;

    constructor(private albumService: AlbumService,
        private authenticationService: AuthenticationService,
        private imageService: ImageService
        ) { }

    ngOnInit() {
        this.loading = true;
        this.albumService.getAllByUserId(this.authenticationService.currentUserValue.id).pipe(first()).subscribe(albums => {
            this.loading = false;
            this.albums = albums;
        });
    }

    getImage(album:Album) {
        this.selectedAlbum = album;
        this.imageService.get(album.id).pipe(first()).subscribe(images => {
            this.images = images;
        });
    }

    selectImage(id:number) {
        this.selectedImage = id;
    }

    changePic(event) {
        this.selectedImage = event;
    }
}