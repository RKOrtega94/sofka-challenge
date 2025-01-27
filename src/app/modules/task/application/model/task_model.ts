export class TaskModel {
  constructor(
    public title: string,
    public description: string,
    public status: 'pending' | 'completed',
    public id?: string,
    public createdAt?: Date,
    public updatedAt?: Date
  ) {}
}
