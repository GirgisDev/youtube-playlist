import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit, OnDestroy {
  @Input("searchString") searchString: string = "";
  loading = true;
  pageNumber = 0;
  total = 0;
  videos = [];
  err = { msg: "" };
  playlistData = {
    resultsPerPage: 8,
    playlisyId: "PL9iY86lJSZY6JZ3cArXUgo34JVWVf_8kI",
    pageToken: ""
  };
  paginationTokens = {};
  subscription;
  orderWith: string;
  orderType = "";
  constructor(private youtubeService: YoutubeService) { }

  ngOnInit() {
    this.getVideosList();
  }

  getVideosList() {
    this.loading = true;
    this.subscription = this.youtubeService.getPlaylist(this.playlistData).subscribe(res => {
      this.videos = [];
      this.orderType = "";
      res.items.map(video => {
        this.videos.push(video.snippet);
      });
      this.total = res.pageInfo.totalResults || this.total;
      this.paginationTokens = {
        next: res.nextPageToken || "",
        prev: res.prevPageToken || ""
      };
      this.loading = false;
      this.err = { msg: "" };
    }, err => {
      this.err.msg = "An error happened! You may try again.";
      this.loading = false;
    })
  }

  paginate(to) {
    let nextToken = this.paginationTokens["next"],
        prevToken = this.paginationTokens["prev"];
    if (to == "next" && (nextToken ? nextToken.length : false))
      this.playlistData.pageToken = nextToken;
    else if (to == "prev" && (prevToken ? prevToken.length : false))
      this.playlistData.pageToken = prevToken;
    else return;
    this.getVideosList();
  }

  setOrder(type) {
    if (this.orderWith !== type) this.orderType = "";
    this.orderWith = type;
    if (this.orderType === "desc" || !this.orderType.length) this.orderType = "asc";
    else this.orderType = "desc";
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
