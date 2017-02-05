import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FileMetadataComponent } from './file-metadata/file-metadata.component';

// Save space in the root module, export components here
export const routedComponents = [
  AppComponent,
  FileMetadataComponent,
];

const routes: Routes = [
  { path: '', component: FileMetadataComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }