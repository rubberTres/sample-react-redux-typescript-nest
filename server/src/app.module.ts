import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { StreamerSchema } from "src/schema/streamer.schema";
import { StreamerService } from './streamer/streamer.service';
import { StreamerController } from './streamer/streamer.controller';

@Module({
	imports: [
		MongooseModule.forRoot("mongodb://localhost:27017", { dbName: "streamerSpotlightApp" }),
		MongooseModule.forFeature([ { name: "Streamer", schema: StreamerSchema } ]),
	],
	controllers: [ AppController, StreamerController ],
	providers: [ AppService, StreamerService ],
})
export class AppModule {
}
