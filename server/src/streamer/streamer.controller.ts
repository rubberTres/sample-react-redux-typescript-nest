import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { StreamerService } from "src/streamer/streamer.service";
import { CreateStreamerDto } from "src/dto/create-streamer.dto";
import { Vote } from "src/interface/streamer.interface";

@Controller('streamer')
export class StreamerController {
	constructor(private readonly streamerService: StreamerService) {}

	@Post()
	async createStreamer(@Res() response, @Body() createStreamerDto: CreateStreamerDto ) {
		try {
			const streamersData = await this.streamerService.getAllStreamers();
			const newStreamer = await this.streamerService.createStreamer(createStreamerDto);
			return response.status(HttpStatus.CREATED).json([ ...streamersData, newStreamer ]);
		} catch (err) {
			return response.status(HttpStatus.BAD_REQUEST).json({
				statusCode: 400,
				message: "Error, Streamer not created",
				error: "Bad request",
			})
		}
	}

	@Get()
	async getStreamers(@Res() response) {
		try {
			const streamersData = await this.streamerService.getAllStreamers();
			return response.status(HttpStatus.OK).json(streamersData)
		} catch (err) {
			return response.status(err.status).json(err.response());
		}
	}

	@Get("/:id")
	async getStreamerById(@Res() response, @Param("id") streamerId: string) {
		try {
			const streamer = await this.streamerService.getStreamer(streamerId);
			return response.status(HttpStatus.OK).json(streamer)
		} catch (err) {
			return response.status(err.status).json(err.response());
		}
	}

	@Put("/:id/vote")
	async voteStreamer(@Res() response, @Param("id") streamerId: string, @Body() voteStreamer: { vote: Vote }) {
		try {
			const streamer = await this.streamerService.voteStreamer(streamerId,  voteStreamer);
			return response.status(HttpStatus.OK).json(streamer)
		} catch (err) {
			return response.status(err.status).json(err.response());
		}
	}

	@Delete("/:id")
	async deleteStreamer(@Res() response, @Param("id") streamerId: string) {
		try {
			const streamer = await this.streamerService.deleteStreamer(streamerId);
			return response.status(HttpStatus.OK).json(streamer)
		} catch(err) {
			return response.status(err.status).json(err.response());
		}
	}
}
