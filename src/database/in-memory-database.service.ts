import { ConflictException, Injectable } from '@nestjs/common';
import { SampleEntity } from './entities/sample.entity';

@Injectable()
export class InMemoryDatabaseService {

  private samplesList: SampleEntity[] = [];

  getSamples(): SampleEntity[] {
    return this.samplesList;
  }

  saveSample(sample: SampleEntity): SampleEntity {
    if (this.samplesList.find(s => s.name === sample.name)) {
      throw new ConflictException('Sample already exists');
    }
    this.samplesList.push(sample);
    return sample;
  }

  deleteSample(sampleName: string) {
    this.samplesList = this.samplesList.filter(sample => sample.name !== sampleName);
    return sampleName;
  }

}
