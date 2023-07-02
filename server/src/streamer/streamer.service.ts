import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateStreamerDto } from "src/dto/create-streamer.dto";
import { IStreamer, Vote } from "src/interface/streamer.interface";

@Injectable()
export class StreamerService {
	constructor(@InjectModel("Streamer") private streamerModel: Model<IStreamer>) {}

	async createStreamer(createStreamerDto: CreateStreamerDto): Promise<IStreamer> {
		const newStreamer = await new this.streamerModel(createStreamerDto);
		return newStreamer.save();
	}

	async getAllStreamers(): Promise<IStreamer[]> {
		const streamerData = await this.streamerModel.find();
		if (!streamerData || streamerData.length === 0) {
			throw new NotFoundException("Streamer data not found");
		}
		return streamerData;
	}

	async getStreamer(streamerId: string): Promise<IStreamer> {
		const existingStreamer = await this.streamerModel.findById(streamerId);
		if (!existingStreamer) {
			throw new NotFoundException(`Streamer with id: ${ streamerId } not found`);
		}
		return existingStreamer;
	}

	async deleteStreamer(streamerId: string): Promise<IStreamer> {
		const streamerToDelete = await this.streamerModel.findByIdAndDelete(streamerId);
		if (!streamerToDelete) {
			throw new NotFoundException(`Streamer with id: ${ streamerId } not found`);
		}
		return streamerToDelete;
	}

	async voteStreamer(streamerId: string, voteStreamer: { vote: Vote }): Promise<IStreamer> {
		const existingStreamer = await this.streamerModel.findByIdAndUpdate(streamerId, {
			$inc: { [ voteStreamer.vote === Vote.UP ? "upVotes": "downVotes" ]: 1 }
		}, { new: true });
		if (!existingStreamer) {
			throw new NotFoundException(`Streamer with id: ${ streamerId } not found`);
		}
		return existingStreamer;
	}
}
