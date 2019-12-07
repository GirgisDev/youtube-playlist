import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private authRequest = environment.authRequest;
  constructor(
    private http: HttpClient
  ) { }

  getPlaylist(data): Observable<any> {
    let request = this.authRequest('playlistItems').trim();
    request =  `${request}&playlistId=${data.playlisyId}&maxResults=${data.resultsPerPage}&pageToken=${data.pageToken}`;
    return this.http.get(request);
  }
  
  getVideoDetails(id): Observable<any> {
    let request = this.authRequest('videos').trim();
    request =  `${request}&id=${id}`;
    return this.http.get(request);
  }
}