import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http:HttpClient) { }
  taskList(): Observable<any>{
    console.log("request");
    return this.http.get(environment.apiEndpoint+'todos');
  }
}
