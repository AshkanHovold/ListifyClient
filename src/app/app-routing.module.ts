import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StartComponent } from "./pages/start/start.component";
import { TemplateComponent } from "./pages/template/templates/templates.component";
import { NewTemplateComponent } from "./pages/template/new-template/new-template.component";
import { EditTemplateComponent } from "./pages/template/edit-template/edit-template.component";
import { NewItemComponent } from './pages/item/new-item/new-item.component';
import { AllItemsComponent } from './pages/item/all-items/all-items.component';
import { ThemeManagerComponent } from './pages/theme/theme-manager/theme-manager.component';
import { AllListsComponent } from './pages/list/all-lists/all-lists.component';
import { NewListComponent } from './pages/list/new-list/new-list.component';
import { ViewListComponent } from './pages/list/view-list/view-list.component';
import { EditThemeComponent } from './pages/theme/edit-theme/edit-theme.component';
import { NewThemeComponent } from './pages/theme/new-theme/new-theme.component';
import { AddItemToListComponent } from './pages/list/add-item-to-list/add-item-to-list.component';
import { ViewItemComponent } from './pages/item/view-item/view-item.component';

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
    path: "item/:itemId",
    component: ViewItemComponent
  },
  {
    path: "item/new/:id",
    component: NewItemComponent
  }, {
    path: "items",
    component: AllItemsComponent
  }, {
    path: "themes",
    component: ThemeManagerComponent
  }, {
    path: "lists",
    component: AllListsComponent
  }, {
    path: "list/new",
    component: NewListComponent
  }, {
    path: "list/:listId",
    component: ViewListComponent
  }, {
    path: "theme/new",
    component: NewThemeComponent
  }, {
    path: "theme/:themeId",
    component: EditThemeComponent
  }, {
    path: "list/add-item/:listId",
    component: AddItemToListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
