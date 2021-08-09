class TableRow extends Polymer.Element {
  static get is() {
    return "table-row";
  }
  static get properties() {
    return {
      date: {
        type: String,
        value: "No date",
      },
      name: {
        type: String,
        value: "No name",
      },
      note: {
        type: String,
        value: "No note",
      },
    };
  }
}

window.customElements.define(TableRow.is, TableRow);
