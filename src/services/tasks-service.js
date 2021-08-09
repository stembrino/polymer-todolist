export class TasksService extends Polymer.Element {
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

  static get is() {
    return "tasks-service";
  }

  getMockTasks() {
    const customEvent = new CustomEvent("sendDataEvent", { detail: this.mockTasks });
    setTimeout(() => {
      document.dispatchEvent(customEvent);
      document.dispatchEvent(this.showTable());
    }, 1500);
  }

  showTable() {
    return new CustomEvent("showTable")
  }
}

window.customElements.define(TasksService.is, TasksService);
