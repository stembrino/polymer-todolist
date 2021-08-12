import { Task } from "../../entities/Task.js";
export class AdapterTasks {
  constructor() {}

  /**
   *
   * @param {Array} Users array
   * @return Task list
   */
  static taskListAdapter(data) {
    const taskList = data.map((info) => {
      const users = new Task("12/02/2021", info.name, info.email);
      return users.getTaskAdapted();
    });
    return taskList;
  }
}
