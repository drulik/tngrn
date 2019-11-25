import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../_models';

@Injectable({ providedIn: 'root' })
export class ImageService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Image[]>(`https://jsonplaceholder.typicode.com/images`);
    }

    get(id:number) {
        return this.http.get<Image[]>(`https://jsonplaceholder.typicode.com/photos`,
        {
            'params': {
                albumId: String(id)
            }
        });
    }
}