import JsonDb = require('node-json-db');
import { Entity } from './models/entity';

export class DbContext<T extends Entity> {
  private _db: JsonDb;

  constructor(path: string) {
    this._db = new JsonDb(path, true, true);
  }

  getSingle(guid: string): T {
    return this._db.getData(`/${guid}`);
  }

  delete(guid: string): void {
    this._db.delete(`/${guid}`);
  }

  getAll(): T[] {
    const all =this._db.getData('/');
    return Object.keys(all).map(key => all[key]);
  }

  upsert(entity: T) {
    this._db.push(`/${entity.guid}`, entity, true);
  }
}