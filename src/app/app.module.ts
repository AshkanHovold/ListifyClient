import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TextComponent } from "./input/text/text.component";
import { TextAreaComponent } from "./input/text-area/text-area.component";
import { StartComponent } from "./pages/start/start.component";
import { TemplateComponent } from "./pages/template/template.component";
import { ListifyDatafieldComponent } from "./input/datafield/listify-datafield/listify-datafield.component";
import { DatafieldInputComponent } from "./input/datafield/input/input.component";
import { OutputComponent } from "./input/datafield/output/output.component";
import { DetailedListComponent } from "./input/datafield/detailed-list/detailed-list.component";
import { SettingsComponent } from "./input/datafield/settings/settings.component";
import { ButtonComponent } from "./standard/button/button.component";
import { CardComponent } from "./standard/card/card.component";
import { ToolbarComponent } from "./standard/toolbar/toolbar.component";
import { ButtonGroupComponent } from "./standard/button-group/button-group.component";
import { ListComponent } from "./standard/list/list.component";
import { ListItemComponent } from "./standard/list-item/list-item.component";
import { InputComponent } from "./standard/input/input.component";
import { NewTemplateComponent } from "./pages/new-template/new-template.component";
import { InfoMsgComponent } from "./standard/info-msg/info-msg.component";
import { EditTemplateComponent } from "./pages/edit-template/edit-template.component";
import { TextContainerComponent } from "./standard/text/text.component";

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    TextAreaComponent,
    StartComponent,
    TemplateComponent,
    ListifyDatafieldComponent,
    DatafieldInputComponent,
    OutputComponent,
    DetailedListComponent,
    SettingsComponent,
    ButtonComponent,
    CardComponent,
    ToolbarComponent,
    ButtonGroupComponent,
    ListComponent,
    ListItemComponent,
    InputComponent,
    NewTemplateComponent,
    InfoMsgComponent,
    EditTemplateComponent,
    TextContainerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
