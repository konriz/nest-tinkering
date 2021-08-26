import { Controller, Get, Param, Delete, Post, Body, Query, UseInterceptors, UseGuards } from "@nestjs/common";
import { SampleService } from "./sample.service";
import { SampleEntity } from "../database/entities/sample.entity";
import { SampleDto } from "./sample.dto";
import { QueryParamsValidationPipe } from "../pipes/query-params-validation.pipe";
import { SampleQuery } from "./sample.query";
import { SampleInterceptor } from "../interceptors/sample.interceptor";
import { SampleGuard } from "../guards/sample.guard";

@UseInterceptors(SampleInterceptor)
@Controller("samples")
export class SampleController {

  constructor(private readonly sampleService: SampleService) {
  }

// Pipe applies for @Param, @Body and @Query
  @Get() getSamples(@Query(QueryParamsValidationPipe) query: SampleQuery): SampleEntity[] {
    return this.sampleService.getSamples();
  }

  @UseGuards(SampleGuard)
  @Post() saveSample(@Body() sample: SampleDto): SampleEntity {
    return this.sampleService.saveSample(sample);
  }

  @Delete(":sampleName") deleteSample(@Param("sampleName") sampleName: string) {
    return this.sampleService.deleteSample(sampleName);
  }
}
