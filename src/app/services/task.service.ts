import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private taskUpdateListener = new Subject<void>();

  getTasks(): Task[] {
    return [...this.tasks];
  }

  getTaskUpdateListener() {
    return this.taskUpdateListener.asObservable();
  }
  addTask(taskData: Partial<Task>): void {
    const task: Task = {
      id: Date.now(),
      title: taskData.title || '',
      description: taskData.description || '',
      priority: taskData.priority || 'medium',
      completed: false,
    };
  }
}
