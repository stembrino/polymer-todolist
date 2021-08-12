import { Task } from "../entities/Task.js";
import { EVENT_LISTENER_TYPES, initEventListnet } from "../tools/util/eventListenerInicializer.js";
import { getRequest } from "../tools/util/fetchAPI.js";

export class TasksService {
  _mockTasks = [
    {
      dateTime: "12/10/2020",
      name: "first task test",
      note: "some note test",
    },
    {
      dateTime: "01/10/2020",
      name: "second task test",
      note: "some note test",
    },
    {
      dateTime: "01/01/2019",
      name: "third task test",
      note: "some note test",
    },
  ];
  eventListenerDataTable;
  eventListenerShowTable;

  constructor() {
    this.eventListenerDataTable = initEventListnet(EVENT_LISTENER_TYPES.SEND_DATA_TABLE, this._mockTasks);
    this.eventListenerShowTable = initEventListnet(EVENT_LISTENER_TYPES.SHOW_TABLE);
  }

  /**
   *
   * @param {Task} task
   */
  addTask(task) {
    this._mockTasks.push(task);
    document.dispatchEvent(this.eventListenerDataTable);
  }

  refreshTable() {
    /**TODO: verify if data changed */
    this.fetchAllTasks();
  }

  async fetchAllTasks() {
    /**TODO take request */
    let test = await getRequest("http://jsonplaceholder.typicode.com/users");
    console.log(test);
    setTimeout(() => {
      document.dispatchEvent(this.eventListenerDataTable);
      document.dispatchEvent(this.eventListenerShowTable);
    }, 500);
  }
}
