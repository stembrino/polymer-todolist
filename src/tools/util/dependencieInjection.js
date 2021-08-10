import { Task } from "../../entities/Task.js";
import { TasksService } from "../../services/tasks-service.js";

export class DependencieInjection {
  constructor() {}

  static injectTaskService() {
    return new TasksService();
  }

  static injectTask(date, name, note) {
    return new Task(date, name, note);
  }
}
