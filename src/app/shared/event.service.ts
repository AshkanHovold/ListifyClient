import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  public static readonly INPUT_CHANGED = 'INPUT_CHANGED';
  public static readonly VALIDATE_FIELDS = "VALIDATE_FIELDS";
  public static readonly FORM_VALIDATION_DONE = "FORM_VALIDATION_DONE";

  public eventAdded$: EventEmitter<AppEventData>;
  private events: AppEventData[] = [];


  constructor() {
    this.eventAdded$ = new EventEmitter();
  }

  public add(event: AppEventData): void {
    this.events.push(event);
    this.eventAdded$.emit(event);
  }
}

export interface AppEventData {
  type: string;
  data?: any;
}