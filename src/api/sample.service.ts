import { Injectable } from "@nestjs/common";
import { InMemoryDatabaseService } from "../database/in-memory-database.service";
import { SampleEntity } from "../database/entities/sample.entity";
import { Deprecated } from "../decorators/deprecated.decorator";

@Injectable()
export class SampleService {

  constructor(private readonly database: InMemoryDatabaseService) {
  }

  getSamples(): SampleEntity[] {
    return this.database.getSamples();
  }

  saveSample(sample: SampleEntity): SampleEntity {
    return this.database.saveSample(sample);
  }

  @Deprecated() deleteSample(sampleName: string) {
    return this.database.deleteSample(sampleName);
  }

}
