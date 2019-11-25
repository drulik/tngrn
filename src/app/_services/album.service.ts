import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../_models';

import { AuthenticationService } from '../_services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AlbumService {
    constructor(private http: HttpClient
        ) { }

    getAllByUserId(userId:Number) {
      if (userId !== undefined) {
        return this.http.get<Album[]>(`https://jsonplaceholder.typicode.com/albums`, 
        {
          'params': {
            userId: String(userId),
          }
        });
      }
    }
}