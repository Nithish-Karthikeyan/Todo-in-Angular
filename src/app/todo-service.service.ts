import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Category } from '../app/Category'
import { HttpHeaders } from '@angular/common/http';
import { Task } from './Task';

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

  getTasks(categoryId: number) {
    return this.http.get("http://localhost:8080/todo/tasks/category/"+categoryId);
  }

  addTask(task: Task) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post("http://localhost:8080/todo/task",task, httpOptions).subscribe((result) => console.log("Added Successfully"));
  }

  getTaskById(taskId:number) {
    return this.http.get("http://localhost:8080/todo/tasks/"+taskId);
  }
}