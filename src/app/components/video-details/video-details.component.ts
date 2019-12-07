import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {
  videoId: string;
  video: object;
  loading = true;
  err = { msg: "" };
  constructor(private youtubeService: YoutubeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.videoId = this.route.snapshot.params.id;
    this.getVideoDetails();
  }

  getVideoDetails() {
    this.youtubeService.getVideoDetails(this.videoId).subscribe(res => {
      this.video = res.items[0].snippet;
      // this.video["description"].replace(new RegExp("\↵","gm"),"<br/>");
      this.loading = false;
      this.err = { msg: "" };
    }, err => {
      this.err.msg = "An error happened! You may try again.";
      this.loading = false;
    })
  }

}
