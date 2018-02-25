import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor(moduleName: string) {
    console.log(`Injected from "${moduleName}"`);
  }
}
