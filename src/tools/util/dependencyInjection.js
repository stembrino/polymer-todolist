import { Task } from "../../entities/Task.js";
import { TasksService } from "../../services/tasks-service.js";

export class DependencyInjection {
  static taskService = new TasksService();

  static injectTaskService() {
    return this.taskService;
  }

  static instancieteTask(date, name, note) {
    return new Task(date, name, note);
  }
}
