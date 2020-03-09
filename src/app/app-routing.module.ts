import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StartComponent } from "./pages/start/start.component";
import { TemplateComponent } from "./pages/template/templates/templates.component";
import { NewTemplateComponent } from "./pages/template/new-template/new-template.component";
import { EditTemplateComponent } from "./pages/template/edit-template/edit-template.component";
import { NewItemComponent } from './pages/item/new-item/new-item.component';
import { AllItemsComponent } from './pages/item/all-items/all-items.component';
import { ThemeManagerComponent } from './pages/theme/theme-manager/theme-manager.component';

const routes: Routes = [
  {
    path: "start",
    component: StartComponent
  },
  {
    path: "templates",
    component: TemplateComponent
  },
  {
    path: "template/new",
    component: NewTemplateComponent
  },
  {
    path: "template/:id",
    component: EditTemplateComponent
  }, {
    path: "item/new/:id",
    component: NewItemComponent
  }, {
    path: "items",
    component: AllItemsComponent
  }, {
    path: "themes",
    component: ThemeManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
