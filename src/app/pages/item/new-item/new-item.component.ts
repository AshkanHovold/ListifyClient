import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataService } from 'src/app/shared/data.service';
import { Constants } from 'src/app/shared/constants';
import { InputService } from 'src/app/shared/input.service';
import { EventService, AppEventData } from 'src/app/shared/event.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss']
})
export class NewItemComponent implements OnInit {

  templateId: string;
  template: any;
  formId: string;
  item: any;
  ready: boolean = false;
  constructor(private route: ActivatedRoute, private dataService: DataService, private inputService: InputService, private eventService: EventService, private router: Router) {
    this.eventService.eventAdded$.subscribe((e: AppEventData) => {
      if (e.type === EventService.FORM_VALIDATION_DONE && e.data.formId === this.formId) {
        this.continueCreatingItem();
      }
    })
  }

  async ngOnInit() {
    this.formId = this.dataService.getNewId();
    this.templateId = this.route.snapshot.paramMap.get('id');
    this.template = await this.dataService.getItem(Constants.TEMPLATE, this.templateId);
    this.item = this.inputService.getNewItem(this.templateId, this.formId, this.template.fields);
    this.inputService.newForm(this.formId, this.template.fields);
    this.ready = true;
    if (environment.debugOn) {
      console.log(this.templateId);
      console.log(this.template);
      console.log(this.item);
    }
  }

  formDisabled(): boolean {
    return !this.inputService.getFormStatus(this.formId);
  }

  createItem() {
    this.inputService.formValidationStarted(this.formId);
    this.eventService.add({ type: EventService.VALIDATE_FIELDS, data: { formId: this.formId } });
  }

  continueCreatingItem() {
    if (environment.debugOn) {
      console.log("back in new-item component. all fields have executed validation logic. checking status on form");
      console.log(`${this.inputService.getFormStatus(this.formId)}`);
    }
  }

  cancel() {
    this.router.navigate(['/template/', this.templateId]);
  }

}
