import { Component } from '@angular/core';

@Component({
  selector: 'tool-box',
  template: `
    <div class="tool-box">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
    .tool-box {
      border: 1px dotted rgba(0,0,0,0.4);
      /*padding: var(--GRID_SIZE_X2);*/
      /*margin-bottom: var(--GRID_SIZE_X2);*/
    }
    `
  ],
})
export class ToolBoxComponent {
  name: "Tool-box component"
}
