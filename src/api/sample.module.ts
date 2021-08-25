import { Module } from "@nestjs/common";
import { InMemoryDatabaseModule } from "../database/in-memory-database.module";
import { SampleService } from "./sample.service";
import { SampleController } from "./sample.controller";

@Module({
  imports: [InMemoryDatabaseModule], providers: [SampleService], controllers: [SampleController],
})
export default class SampleModule {
}
