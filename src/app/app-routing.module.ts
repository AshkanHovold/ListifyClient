import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StartComponent } from "./pages/start/start.component";
import { TemplateComponent } from "./pages/template/template.component";
import { NewTemplateComponent } from "./pages/new-template/new-template.component";
import { EditTemplateComponent } from "./pages/edit-template/edit-template.component";

const routes: Routes = [
  {
    path: "start",
    component: StartComponent
  },
  {
    path: "template",
    component: TemplateComponent
  },
  {
    path: "template/new",
    component: NewTemplateComponent
  },
  {
    path: "template/:id",
    component: EditTemplateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
