import { Platform } from "src/schema/streamer.schema";
export declare class CreateStreamerDto {
    readonly name: string;
    readonly platform: Platform;
    readonly description: string;
    readonly upVotes: number;
    readonly downVotes: number;
}
