import { Task } from "../entities/Task.js";
import { EVENT_LISTENER_TYPES, initEventListnet } from "../tools/util/eventListenerInicializer.js";
import { getRequest } from "../tools/util/fetchAPI.js";
import { AdapterTasks } from "../tools/adapters/adapterTasks.js";

export class TasksService {
  tasks;
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
  eventListenerHasError;

  constructor() {
    this.eventListenerDataTable = initEventListnet(EVENT_LISTENER_TYPES.SEND_DATA_TABLE, this.tasks);
    this.eventListenerShowTable = initEventListnet(EVENT_LISTENER_TYPES.SHOW_TABLE);
    this.eventListenerHasError = initEventListnet(EVENT_LISTENER_TYPES.HAS_ERROR_LISTENER, true);
  }

  /**
   *
   * @param {Task} task
   */
  addTask(task) {
    this.tasks.push(task);
    document.dispatchEvent(this.eventListenerDataTable);
  }

  refreshTable() {
    /**TODO: verify if data changed */
    this.fetchAllTasks();
  }

  async fetchAllTasks() {
    try {
      let dataTable = await getRequest("http://jsonplaceholder.typicode.com/users");
      // let dataTable = await getRequest("http://jsonplaceholde.typicode.com/users"); //froce an error
      this.tasks = AdapterTasks.taskListAdapter(dataTable);
      this.eventListenerDataTable.payload = this.tasks;
      document.dispatchEvent(this.eventListenerDataTable);
      document.dispatchEvent(this.eventListenerShowTable);
    } catch (error) {
      console.info(error);
      console.info("request fail");
      document.dispatchEvent(this.eventListenerHasError);
      this.eventListenerDataTable.payload = this._mockTasks;
    }
  }
}
