import { Platform } from "src/schema/streamer.schema";
export declare enum Vote {
    UP = "UP",
    DOWN = "DOWN"
}
export interface IStreamer extends Document {
    readonly name: string;
    readonly platform: Platform;
    readonly description: string;
    readonly upVotes: number;
    readonly downVotes: number;
}
