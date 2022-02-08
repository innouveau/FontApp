import { Component } from '@angular/core';

@Component({
  selector: 'tools-component',
  template: `
    <div class="tools">
      <identity></identity>
      <tool-box>
        Tool box content
      </tool-box>
    </div>
  `,
  styles: [
    `
    .tools { }
    `
  ],
})
export class ToolsComponent {
  name: "Tools component"
}
