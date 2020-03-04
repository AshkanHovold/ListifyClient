import { Injectable } from "@angular/core";
import { OfflineStorageService } from "./offline-storage.service";
import { v4 as uuidv4 } from "uuid";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private storage: OfflineStorageService) { }

  getDataFromStorage(type: string, key: string): Promise<any> {
    return this.storage.getItem(type, key);
  }

  async setDataToStorage(type: string, key: string, item: any): Promise<void> {
    await this.storage.save(type, key, item);
  }

  async getAllDataFromStorage(type: string): Promise<any[]> {
    let result = await this.storage.getAll(type);
    if (environment.debugOn) {
      console.log(result);
    }
    return result;
  }

  getNewId(): string {
    return uuidv4();
  }

  deepCopy(toCopy: any): any {
    return JSON.parse(JSON.stringify(toCopy));
  }
}
