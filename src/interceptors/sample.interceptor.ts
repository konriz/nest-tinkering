import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

// change return format
export class SampleInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    const userAgent = context.getArgs()[0].headers["user-agent"];
    return next.handle().pipe(map(value => {
      return {result: value, userAgent: userAgent};
    }));
  }

}
