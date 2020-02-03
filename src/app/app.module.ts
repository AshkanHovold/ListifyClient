import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponent } from './input/text/text.component';
import { TextAreaComponent } from './input/text-area/text-area.component';
import { StartComponent } from './pages/start/start.component';
import { TemplateComponent } from './pages/template/template.component';
import { ListifyDatafieldComponent } from './input/datafield/listify-datafield/listify-datafield.component';
import { InputComponent } from './input/datafield/input/input.component';
import { OutputComponent } from './input/datafield/output/output.component';
import { DetailedListComponent } from './input/datafield/detailed-list/detailed-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    TextAreaComponent,
    StartComponent,
    TemplateComponent,
    ListifyDatafieldComponent, InputComponent, OutputComponent, DetailedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
