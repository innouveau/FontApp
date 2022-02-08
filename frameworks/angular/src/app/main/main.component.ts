import { Component } from '@angular/core';

@Component({
  selector: 'main-component',
  template: `
    <div class="main">
      <tools-component></tools-component>
    </div>
  `,
  styles: [
    `
    .main {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: var(--BACKGROUND);;
      display: flex;
      color: var(--MAIN_TEXT);
    }
    `
  ]
})
export class MainComponent {
  name: "Main component"
}
