"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const streamer_interface_1 = require("../interface/streamer.interface");
let StreamerService = exports.StreamerService = class StreamerService {
    constructor(streamerModel) {
        this.streamerModel = streamerModel;
    }
    async createStreamer(createStreamerDto) {
        const newStreamer = await new this.streamerModel(createStreamerDto);
        return newStreamer.save();
    }
    async getAllStreamers() {
        const streamerData = await this.streamerModel.find();
        if (!streamerData || streamerData.length === 0) {
            throw new common_1.NotFoundException("Streamer data not found");
        }
        return streamerData;
    }
    async getStreamer(streamerId) {
        const existingStreamer = await this.streamerModel.findById(streamerId);
        if (!existingStreamer) {
            throw new common_1.NotFoundException(`Streamer with id: ${streamerId} not found`);
        }
        return existingStreamer;
    }
    async deleteStreamer(streamerId) {
        const streamerToDelete = await this.streamerModel.findByIdAndDelete(streamerId);
        if (!streamerToDelete) {
            throw new common_1.NotFoundException(`Streamer with id: ${streamerId} not found`);
        }
        return streamerToDelete;
    }
    async voteStreamer(streamerId, voteStreamer) {
        const existingStreamer = await this.streamerModel.findByIdAndUpdate(streamerId, {
            $inc: { [voteStreamer.vote === streamer_interface_1.Vote.UP ? "upVotes" : "downVotes"]: 1 }
        }, { new: true });
        if (!existingStreamer) {
            throw new common_1.NotFoundException(`Streamer with id: ${streamerId} not found`);
        }
        return existingStreamer;
    }
};
exports.StreamerService = StreamerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)("Streamer")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], StreamerService);
//# sourceMappingURL=streamer.service.js.map