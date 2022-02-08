import { Component } from '@angular/core';

@Component({
  selector: 'identity',
  template: `
    <div class="identity">
      <img src="assets/img/logo_fontapp.jpg" alt="Logo FontApp" />
    </div>
  `,
  styles: [
    `
    .identity {
      height: 60px;
      display: flex;
    }
    `
  ],
})
export class IdentityComponent {
  name: "Identity component"
}
