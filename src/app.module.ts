import { Module } from '@nestjs/common';
import SampleModule from './api/sample.module';

@Module({
  imports: [SampleModule],
})
export class AppModule {
}
