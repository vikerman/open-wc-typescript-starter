import { html, css, LitElement } from 'lit-element';

export class PageOne extends LitElement {
  title = 'Hey there';
  counter = 5;

  static get styles() {
    return css`
      :host {
        --page-one-text-color: #000;

        display: block;
        padding: 25px;
        color: var(--page-one-text-color);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
