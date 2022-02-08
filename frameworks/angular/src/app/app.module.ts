import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';
import { ToolsComponent } from "./main/tools/tools.component";
import { IdentityComponent } from "./main/tools/identity/identity.component";
import { ToolBoxComponent } from "./main/tools/tool-box.component";



@NgModule({
  declarations: [
    AppComponent, MainComponent, ToolsComponent, IdentityComponent,
    ToolBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
