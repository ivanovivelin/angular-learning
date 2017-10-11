import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatInputModule,
  MatSnackBarModule,
  MatGridListModule,
  MatMenuModule,
  MatSelectModule,
  MatExpansionModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSnackBarModule,
    MatGridListModule,
    MatMenuModule,
    MatSelectModule,
    MatExpansionModule
  ],
  declarations: [],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSnackBarModule,
    MatGridListModule,
    MatMenuModule,
    MatSelectModule,
    MatExpansionModule
  ]
})
export class AppMaterialModule { }