class PolymerFormTask extends Polymer.Element {
  static get is() {
    return "polymer-form-task";
  }

  static get properties() {
    return {
      labeltaskname: {
        type: String,
        value: "Task Name"
      },
      labeltasknote: {
        type: String,
        value: "Note"
      }
    }
  }

  submitTask(event) {
    console.log(event)
  }
}

window.customElements.define(PolymerFormTask.is, PolymerFormTask);
