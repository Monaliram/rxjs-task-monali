import { Component, Input, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Observable } from "rxjs";
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input()
  tasklist!: Observable<any>;
  constructor(private taskservice:TaskServiceService) { 
    this.tasklist = taskservice.taskList()
    console.log(this.tasklist)
  }

  ngOnInit(): void {
  }

}
