import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { IsInternalUrl } from "../validators/internal-url.validator";

export class SampleDto {
  @IsString() @IsNotEmpty() name: string;
  @IsString() @IsNotEmpty() description: string;
  @IsBoolean() active: boolean;
  @IsInternalUrl() url: string;
}
