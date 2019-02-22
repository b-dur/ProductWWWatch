const template = `
  <style>
    :host {
      display: flex;
      padding: 16px;
    }
  </style>
  <li>
    <slot></slot>
    <input id="deleteButton" type="button" value="delete" />
  </li>
`;

customElements.define(
  "li-deletable",
  class liDeletable extends HTMLElement {
    constructor() {
      super();

      const root = this.attachShadow({ mode: "open", delegatesFocus: true });
      root.innerHTML = template;

      this.shadowRoot.getElementById("deleteButton").addEventListener(
        "click",

        this.dispatchEvent.bind(
          this,
          new Event("delete", { bubbles: true, cancelable: true })
        )
      );
    }
  }
);
