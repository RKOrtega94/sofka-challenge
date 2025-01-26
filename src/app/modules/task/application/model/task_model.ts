export class TaskModel {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public status: 'pending' | 'completed',
    public createdAt: Date,
    public updatedAt: Date
  ) {}

  completed(): boolean {
    return this.status === 'completed';
  }
}
