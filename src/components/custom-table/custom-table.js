import { DependencyInjection } from "../../tools/util/dependencyInjection.js";

class CustomTable extends Polymer.Element {
  taskService;

  constructor() {
    super();
    this.taskService = DependencyInjection.injectTaskService();
  }

  static get is() {
    return "custom-table";
  }

  static get properties() {
    return {
      tabletitle: String,
      tasks: {
        type: Array,
      },
    };
  }

  clickRefreshTable() {
    this.taskService.refreshTable();
  }
}

window.customElements.define(CustomTable.is, CustomTable);
