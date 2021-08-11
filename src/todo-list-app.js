import { EVENT_LISTENER_TYPES } from "./tools/util/eventListenerInicializer.js";
import { DependencyInjection } from "./tools/util/dependencyInjection.js";
import { copyObject } from "./tools/util/tool.js";

class TodoListApp extends Polymer.Element {
  taskService;

  constructor() {
    super();
  }

  static get is() {
    return "todo-list-app";
  }

  static get properties() {
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

  /**
   * @Learning
   * call the getMockTasks to call the mock data with timeout to test
   * Bind creates a new function that will force the this inside the function to be the parameter passed to bind().
   * In other words, it'll not work use "this" inside the  updateDataTable().
   * Passing "this" as a parameter you can use the todo-list-app scope, and then the this.set(...) will work correctly.
   */
  ready() {
    super.ready();
    this.taskService = DependencyInjection.injectTaskService();
    this.taskService.fetchAllTasks();
    this.setDataTableLoaded = this.setDataTableLoaded.bind(this);
  }

  /**
   * @Learning
   * Add eventListener to connect with the changes in service class
   * and set the function that you'd like to trigger when event will be called
   */
  connectedCallback() {
    super.connectedCallback();

    document.addEventListener(EVENT_LISTENER_TYPES.SEND_DATA_TABLE, this.updateDataTable);
    document.addEventListener(EVENT_LISTENER_TYPES.SHOW_TABLE, this.setDataTableLoaded);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener(EVENT_LISTENER_TYPES.SEND_DATA_TABLE, this.updateDataTable);
    document.removeEventListener(EVENT_LISTENER_TYPES.SHOW_TABLE, this.setDataTableLoaded);
  }

  /**
   * @Learning you can use Arrow function to avoid ".bind(this)" in the constructor or ready function
   * @param {Object} event event send from eventListener in Servrvice
   */
  updateDataTable = (event) => {
    /** Create a new Object to force update */
    this.set("tasks", copyObject(event.detail));
  };

  setDataTableLoaded() {
    this.set("dataTableLoaded", true);
  }
}

window.customElements.define(TodoListApp.is, TodoListApp);
