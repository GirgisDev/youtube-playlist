import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';

// common components
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { FilterPipe } from './pipes/filter.pipe';

// service
import { YoutubeService } from './services/youtube.service';

// routing modules
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './shared/error/error.component';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlaylistComponent,
    PaginationComponent,
    LoadingComponent,
    FilterPipe,
    VideoDetailsComponent,
    HomeComponent,
    ErrorComponent,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
