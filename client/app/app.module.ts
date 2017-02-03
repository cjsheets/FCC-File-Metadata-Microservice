import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Development and debugging interface: in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
//import { FileMetadataService } from './components/file-metadata/file-metadata.service';
import { FileMetadataMinComponent } from './components/file-metadata-min/file-metadata.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
//    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FileMetadataMinComponent
  ],
//  providers: [ FileMetadataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }