import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/modules/shared/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){

    this.categoryService.getCategories()
      .subscribe( (data:any) => {
        
        console.log("Respuesta categories: ", data);

      }, (error:any) => {
        console.log("error: ", error);
      })
  }

}
