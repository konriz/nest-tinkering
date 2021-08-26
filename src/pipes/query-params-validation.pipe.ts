import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { SampleQuery } from "../api/sample.query";

export class QueryParamsValidationPipe implements PipeTransform {
  transform(value: SampleQuery, metadata: ArgumentMetadata): any {
    // make sure that only one param goes through
    if (value.name && value.active) {
      throw new BadRequestException("Specify only one query param");
    }
    return value;
  }

}
