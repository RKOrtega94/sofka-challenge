import { Injectable } from '@angular/core';
import { ApiService } from '@helpers/api.service';
import { TaskModel } from '@task/application/model/task_model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskSource extends ApiService {
  retrieveTasks(): Observable<TaskModel[]> {
    return this.get<TaskModel[]>(`tasks`, {});
  }

  createTask(task: TaskModel): Observable<TaskModel> {
    return this.post<TaskModel>(`tasks`, task, {});
  }

  deleteTask(id: string): Observable<any> {
    return this.delete(`tasks/${id}`, {});
  }

  updateTask(task: TaskModel): Observable<TaskModel> {
    return this.put<TaskModel>(`tasks/${task.id}`, task, {});
  }
}
