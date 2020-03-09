import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TextComponent } from "./input/text/text.component";
import { TextAreaComponent } from "./input/text-area/text-area.component";
import { StartComponent } from "./pages/start/start.component";
import { TemplateComponent } from "./pages/template/templates/templates.component";
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
import { NewTemplateComponent } from "./pages/template/new-template/new-template.component";
import { InfoMsgComponent } from "./standard/info-msg/info-msg.component";
import { EditTemplateComponent } from "./pages/template/edit-template/edit-template.component";
import { TextContainerComponent } from "./standard/text/text.component";
import { RadioComponent } from './standard/radio/radio.component';
import { SelectComponent } from './standard/select/select.component';
import { InputHostDirective } from './directives/input-host.directive';
import { DisplayInputComponent } from './input/display-input/display-input.component';
import { TextareaComponent } from './standard/textarea/textarea.component';
import { NewItemComponent } from './pages/item/new-item/new-item.component';
import { EditItemComponent } from './pages/item/edit-item/edit-item.component';
import { NewListComponent } from './pages/list/new-list/new-list.component';
import { EditListComponent } from './pages/list/edit-list/edit-list.component';
import { NewDashboardComponent } from './pages/dashboard/new-dashboard/new-dashboard.component';
import { EditDashboardComponent } from './pages/dashboard/edit-dashboard/edit-dashboard.component';
import { ImageComponent } from './input/image/image.component';
import { AllItemsComponent } from './pages/item/all-items/all-items.component';
import { ItemComponent } from './components/item/item.component';
import { ThemeManagerComponent } from './pages/theme/theme-manager/theme-manager.component';

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
    TextContainerComponent,
    RadioComponent,
    SelectComponent,
    InputHostDirective,
    DisplayInputComponent,
    TextareaComponent,
    NewItemComponent,
    EditItemComponent,
    NewListComponent,
    EditListComponent,
    NewDashboardComponent,
    EditDashboardComponent,
    ImageComponent,
    AllItemsComponent,
    ItemComponent,
    ThemeManagerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TextComponent]
})
export class AppModule { }
