import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
  handleError(error) {
    console.info('AppErrorHandler: No worries I take care... :-)', error);
  }
}
