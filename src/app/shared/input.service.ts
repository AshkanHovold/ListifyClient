import { Injectable } from "@angular/core";
import { InputItem } from './models/inputItem';
import { TextComponent } from '../input/text/text.component';

@Injectable({
  providedIn: "root"
})
export class InputService {
  constructor() { }
  fieldChanged(input: any) {
    console.log(input);
  }

  getAvailableInputs(): InputItem[] {
    return [
      new InputItem(TextComponent)
    ]
  }
}
