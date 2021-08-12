import { DependencyInjection } from "../../tools/util/dependencyInjection.js";

class PolymerFormTask extends Polymer.Element {
  title;
  note;
  task;
  tasksService;

  constructor() {
    super();
    this.tasksService = DependencyInjection.injectTaskService();
  }

  static get is() {
    return "polymer-form-task";
  }

  static get properties() {
    return {
      labeltaskname: {
        type: String,
        value: "Task Name",
      },
      labeltasknote: {
        type: String,
        value: "Note",
      },
    };
  }

  isAnValidTask(date, name, note) {
    /**TODO: validation task */
    let hasnoValueEmpty = date && name && note;
    return hasnoValueEmpty;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  submitTask() {
    this.title = this.getShadowDomPolymer("taskTitleForm", "#taskTitle").value;
    this.note = this.getShadowDomPolymer("taskNoteForm", "#taskNote").value;
    if (!this.isAnValidTask("test date", this.title, this.note))
      return console.info("do some stuff to indicate that is not valid Task");
    this.task = DependencyInjection.instancieteTask("21/12/2021", this.title, this.note);
    this.tasksService.addTask(this.task.getTaskAdapted());
  }

  /**
   * @Learning this.$ is a Polymer selector shadow dom.
   * @param {String} idElementShadow
   * @param {String} idElement
   * @returns the element dom
   */
  getShadowDomPolymer(idElementShadow, idElement) {
    return this.$[idElementShadow].shadowRoot.querySelector(idElement);
  }
}

window.customElements.define(PolymerFormTask.is, PolymerFormTask);
