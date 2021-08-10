class CustomTable extends Polymer.Element {
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
    
  }
}

window.customElements.define(CustomTable.is, CustomTable);
