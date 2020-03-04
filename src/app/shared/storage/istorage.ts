export interface IStorage {
  save(): void;
  getItem(): Promise<any>;
}
