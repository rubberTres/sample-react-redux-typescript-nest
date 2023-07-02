import { Model } from "mongoose";
import { CreateStreamerDto } from "src/dto/create-streamer.dto";
import { IStreamer, Vote } from "src/interface/streamer.interface";
export declare class StreamerService {
    private streamerModel;
    constructor(streamerModel: Model<IStreamer>);
    createStreamer(createStreamerDto: CreateStreamerDto): Promise<IStreamer>;
    getAllStreamers(): Promise<IStreamer[]>;
    getStreamer(streamerId: string): Promise<IStreamer>;
    deleteStreamer(streamerId: string): Promise<IStreamer>;
    voteStreamer(streamerId: string, voteStreamer: {
        vote: Vote;
    }): Promise<IStreamer>;
}
