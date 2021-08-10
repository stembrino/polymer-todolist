import { EVENT_LISTENER_TYPES, initEventListnet } from "../tools/util/eventListenerInicializer.js";

export class TasksService {
  mockTasks = [
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
    this.eventListenerDataTable = initEventListnet(EVENT_LISTENER_TYPES.SEND_DATA_TABLE, this.mockTasks);
    this.eventListenerShowTable = initEventListnet(EVENT_LISTENER_TYPES.SHOW_TABLE);
  }

  /**
   *
   * @param {Task} task
   */
  addTask(task) {
    this.mockTasks.push(task);
    document.dispatchEvent(this.eventListenerDataTable);
  }

  getMockTasks() {
    setTimeout(() => {
      document.dispatchEvent(this.eventListenerDataTable);
      document.dispatchEvent(this.eventListenerShowTable);
    }, 500);
  }
}
