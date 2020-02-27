import { Injectable } from "@angular/core";
import { IStorage } from "./storage/istorage";

@Injectable({
  providedIn: "root"
})
export class OfflineStorageService implements IStorage {
  getAllByType(type: string): any[] {
    throw new Error("Method not implemented.");
  }
  getByTypeAndId(type: string, id: string) {
    throw new Error("Method not implemented.");
  }
  save(type: string, item: any): void {
    throw new Error("Method not implemented.");
  }

  constructor() {}
}
