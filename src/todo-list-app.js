import { TasksService } from "./services/tasks-service";

class TodoListApp extends Polymer.Element {
  static get is() {
    return "todo-list-app";
  }

  static get properties() {
    let taskService = new TasksService();
    return {
      tabletitle: {
        type: String,
        value: "To Do List",
      },
      tasks: {
        type: Array,
        value() {
          return [];
        },
        reflectToAttribute: true,
      },
      dataTableLoaded: {
        type: Boolean,
        value: false,
      },
    };
  }

  ready() {
    super.ready();
    new TasksService().getMockTasks();
    /**
     * @Learning
     * Bind creates a new function that will force the this inside the function to be the parameter passed to bind().
     * In other words, it'll not work use "this" inside the  updateDataTable().
     * Passing "this" as a parameter you can use the todo-list-app scope, and then the this.set(...) will work correctly.
     */
    this.updateDataTable = this.updateDataTable.bind(this);
    this.setDataTableLoaded = this.setDataTableLoaded.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    /**
     * @Learning
     * Add eventListener to connect with the changes in service class 
     * and set the function that you'd like to trigger when event will be called
     */
    document.addEventListener("sendDataEvent", this.updateDataTable);
    document.addEventListener("showTable", this.setDataTableLoaded);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("sendDataEvent", this.updateDataTable);
    document.removeEventListener("showTable", this.setDataTableLoaded);
    // this.set("dataTableLoaded", false); //simple way
  }

  updateDataTable(event) {
    this.set("tasks", event.detail);
    // this.set("dataTableLoaded", true); //simple way to put the spinner loader
  }

  setDataTableLoaded() {
    this.set("dataTableLoaded", true);
  }
}

window.customElements.define(TodoListApp.is, TodoListApp);
