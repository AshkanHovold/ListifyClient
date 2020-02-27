import { Injectable } from "@angular/core";
import { IStorage } from "./storage/istorage";
import {
  NgForage,
  Driver,
  NgForageCache,
  NgForageConfig,
  CachedItem
} from "ngforage";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class OfflineStorageService {
  constructor(
    private readonly ngf: NgForage,
    private readonly cache: NgForageCache
  ) {
    this.ngf.name = "SomeStore";
    this.cache.driver = Driver.LOCAL_STORAGE;
  }

  save(type: string, key: string, item: any): void {
    this.ngf.storeName = type;
    this.ngf.setItem(key, item);
  }

  public async getItem(type: string, key: string): Promise<any> {
    this.ngf.storeName = type;
    let result = await this.ngf.getItem(key);
    if (environment.debugOn) {
      console.log(result);
    }
    return result;
  }

  public async getAll(type: string): Promise<any[]> {
    this.ngf.storeName = type;
    let keys = await this.ngf.keys();
    if (environment.debugOn) {
      console.log(keys);
    }
    let toReturn = [];

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      let toAdd = await this.getItem(type, key);
      toReturn.push(toAdd);
    }
    return toReturn;
  }

  public getCachedItem(key: string): Promise<any> {
    return this.cache.getCached(key).then((r: CachedItem<any>) => {
      if (!r.hasData || r.expired) {
        return null;
      }

      return r.data;
    });
  }
}
