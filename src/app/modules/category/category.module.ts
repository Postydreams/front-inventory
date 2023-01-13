import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardHeader, MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule

  ]
})
export class CategoryModule { }