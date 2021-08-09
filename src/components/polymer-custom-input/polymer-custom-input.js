class PolymerCustomInput extends Polymer.Element {
  static get is() {
    return "polymer-custom-input";
  }

  static get properties() {
    return {
      id: {
        type: String,
        value: "Dump Id",
      },
      placeholdertext: {
        type: String,
        value: "Dump placeholder",
      },
      labelname: {
        type: String,
        value: "Dump Label",
      },
    };
  }
}

window.customElements.define(PolymerCustomInput.is, PolymerCustomInput);
