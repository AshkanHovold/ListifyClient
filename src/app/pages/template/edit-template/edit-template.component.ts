import {
  Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "src/app/shared/data.service";
import { Constants } from "src/app/shared/constants";
import { InputHostDirective } from "src/app/directives/input-host.directive";
import { InputService } from "src/app/shared/input.service";
import { InputField } from "src/app/shared/models/inputField";

@Component({
  selector: "app-edit-template",
  templateUrl: "./edit-template.component.html",
  styleUrls: ["./edit-template.component.scss"]
})
export class EditTemplateComponent implements OnInit {
  @ViewChild(InputHostDirective, { static: true })
  inputHost: InputHostDirective;
  templateId: string;
  template: any;
  selectedItem: string = "";
  selectedField: any;
  fieldToAdd: any;
  fieldNameValid: boolean;
  msg: string = "";
  fieldTypes: any[];
  constructor(
    private inputService: InputService,
    private route: ActivatedRoute,
    private dataService: DataService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private router: Router
  ) { }

  async ngOnInit() {
    this.templateId = this.route.snapshot.paramMap.get("id");
    this.template = await this.dataService.getDataFromStorage(
      Constants.TEMPLATE,
      this.templateId
    );
    this.fieldTypes = this.inputService.getAvailableFieldTypes();
  }

  editField(field: any) {
    this.selectedField = field;
    this.fieldToAdd = null;
  }

  newField() {
    this.fieldToAdd = this.inputService.getNewTemplateFieldData(
      this.templateId
    );
    this.selectedField = null;
  }

  cancel() {
    this.fieldToAdd = null;
    this.selectedField = null;
  }

  async addField() {
    this.template.fields.push(this.fieldToAdd);
    let toUpdate = this.dataService.deepCopy(this.template);
    await this.dataService.setDataToStorage(
      Constants.TEMPLATE,
      this.templateId,
      toUpdate
    );
    this.fieldToAdd = null;
  }

  validateFieldName() {
    if (!this.fieldToAdd.name) {
      this.fieldNameValid = false;
      this.msg = "Field name is required";
    } else if (this.fieldToAdd.name.length < 3) {
      this.fieldNameValid = false;
      this.msg = "Field name must be atleast 3 characters";
    } else {
      this.fieldNameValid = true;
      this.msg = "";
    }
  }

  newItem() {
    this.router.navigate(['/item/new/', this.templateId]);
  }

  loadComponent() {
    //<ng-template appInputHost></ng-template>  <-- but this in view outside ng-if to load component dynamicly. not using this right now
    let inputComponents = this.inputService.getAvailableInputs();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      inputComponents[0].component
    );
    const viewContainerRef = this.inputHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<any>componentRef.instance).render = "settings";
  }
}
