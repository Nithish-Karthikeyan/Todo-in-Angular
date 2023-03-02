import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Category } from '../app/Category'
import { HttpHeaders } from '@angular/common/http';
import { Task } from './Task';
import { environment } from '../environments/environment.development';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  baseUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

  getCategory() {
    return this.http.get(`${this.baseUrl}/categories`);
  }

  addCategory(category: Category) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(`${this.baseUrl}/category`,category, httpOptions).subscribe((result) => console.log("Added Successfully"));
  }

  getTasks(categoryId: number) {
    return this.http.get(`${this.baseUrl}/tasks/category/${categoryId}`);
  }

  addTask(task: Task) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(`${this.baseUrl}/task`,task, httpOptions).subscribe((result) => console.log("Added Successfully"));
  }

  getTaskById(taskId:number) {
    return this.http.get(`${this.baseUrl}/tasks/${taskId}`);
  }

  getUser(user: User){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(`${this.baseUrl}/userDetails`, user, httpOptions);
  }
}