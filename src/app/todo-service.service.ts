import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Category } from '../app/Category'
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http : HttpClient) { }

  getCategory() {
    return this.http.get("http://localhost:8080/todo/categories");
  }

  addCategory(category: Category) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post("http://localhost:8080/todo/category",category, httpOptions).subscribe((result) => console.log("Added Successfully"));
  }
}