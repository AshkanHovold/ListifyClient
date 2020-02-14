import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class InputService {
  constructor() {}
  fieldChanged(input: any) {
    console.log(input);
  }
}
