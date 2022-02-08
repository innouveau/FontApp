import { Component } from '@angular/core';
import DATA from "shared/data/index.js";
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cssStyles = null;

  constructor(private sanitizer: DomSanitizer) {
    const getCssVars = (DATA: { [key: string]: any }) => {
      const items: string[] = [];

      const addItems = (keys: { [key: string]: string }) => {
        for (const key in keys) {
          const value: string = keys[key];
          items.push("--" + key + ": " + value);
        }
      }
      addItems(DATA.STYLES.COLORS);
      addItems(DATA.STYLES.SIZES);
      return items.join("; ");
    }

    const css = getCssVars(DATA);
    this.cssStyles = this.sanitizer.bypassSecurityTrustStyle(css);
  }
}
