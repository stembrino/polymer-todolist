class PolymerCustomInput extends Polymer.Element {
  static get is() {
    return "polymer-custom-input";
  }

  static get properties() {
    return {
      inputid: {
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

  ready() {
    super.ready();
  }
}

window.customElements.define(PolymerCustomInput.is, PolymerCustomInput);
