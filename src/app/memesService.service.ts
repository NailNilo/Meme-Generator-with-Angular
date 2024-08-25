import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemesServiceService {
  constructor(private http: HttpClient) {}

  fetchMemes(): Observable<any> {
    const apiUrl = 'https://meme-api.com/gimme/1';
    return this.http
      .get<any>(apiUrl)
      .pipe(map((response) => response.memes || []));
  }
}
