import { Injectable } from "@angular/core";
import { OfflineStorageService } from "./offline-storage.service";
import { v4 as uuidv4 } from "uuid";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private storage: OfflineStorageService) {}

  getItem(type: string, key: string): Promise<any> {
    return this.storage.getItem(type, key);
  }

  setItem(type: string, key: string, item: any): void {
    this.storage.save(type, key, item);
  }

  async getAllItems(type: string): Promise<any[]> {
    let result = await this.storage.getAll(type);
    if (environment.debugOn) {
      console.log(result);
    }
    return result;
  }

  getNewId(): string {
    return uuidv4();
  }
}
