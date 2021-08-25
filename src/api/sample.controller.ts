import { Controller, Get, Param, Delete, Post, Body } from '@nestjs/common';
import { SampleService } from './sample.service';
import { SampleEntity } from '../database/entities/sample.entity';
import { SampleDto } from './sample.dto';

@Controller('samples')
export class SampleController {

  constructor(private readonly sampleService: SampleService) {
  }

  @Get() getSamples(): SampleEntity[] {
    return this.sampleService.getSamples();
  }

  @Post() saveSample(@Body() sample: SampleDto): SampleEntity {
    return this.sampleService.saveSample(sample);
  }

  @Delete(':sampleName') deleteSample(@Param('sampleName') sampleName: string) {
    return this.sampleService.deleteSample(sampleName);
  }
}
