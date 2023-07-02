import { StreamerService } from "src/streamer/streamer.service";
import { CreateStreamerDto } from "src/dto/create-streamer.dto";
import { Vote } from "src/interface/streamer.interface";
export declare class StreamerController {
    private readonly streamerService;
    constructor(streamerService: StreamerService);
    createStreamer(response: any, createStreamerDto: CreateStreamerDto): Promise<any>;
    getStreamers(response: any): Promise<any>;
    getStreamerById(response: any, streamerId: string): Promise<any>;
    voteStreamer(response: any, streamerId: string, voteStreamer: {
        vote: Vote;
    }): Promise<any>;
    deleteStreamer(response: any, streamerId: string): Promise<any>;
}
