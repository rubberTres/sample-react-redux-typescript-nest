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
exports.StreamerController = void 0;
const common_1 = require("@nestjs/common");
const streamer_service_1 = require("./streamer.service");
const create_streamer_dto_1 = require("../dto/create-streamer.dto");
let StreamerController = exports.StreamerController = class StreamerController {
    constructor(streamerService) {
        this.streamerService = streamerService;
    }
    async createStreamer(response, createStreamerDto) {
        try {
            const streamersData = await this.streamerService.getAllStreamers();
            const newStreamer = await this.streamerService.createStreamer(createStreamerDto);
            return response.status(common_1.HttpStatus.CREATED).json([...streamersData, newStreamer]);
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: "Error, Streamer not created",
                error: "Bad request",
            });
        }
    }
    async getStreamers(response) {
        try {
            const streamersData = await this.streamerService.getAllStreamers();
            return response.status(common_1.HttpStatus.OK).json(streamersData);
        }
        catch (err) {
            return response.status(err.status).json(err.response());
        }
    }
    async getStreamerById(response, streamerId) {
        try {
            const streamer = await this.streamerService.getStreamer(streamerId);
            return response.status(common_1.HttpStatus.OK).json(streamer);
        }
        catch (err) {
            return response.status(err.status).json(err.response());
        }
    }
    async voteStreamer(response, streamerId, voteStreamer) {
        try {
            const streamer = await this.streamerService.voteStreamer(streamerId, voteStreamer);
            return response.status(common_1.HttpStatus.OK).json(streamer);
        }
        catch (err) {
            return response.status(err.status).json(err.response());
        }
    }
    async deleteStreamer(response, streamerId) {
        try {
            const streamer = await this.streamerService.deleteStreamer(streamerId);
            return response.status(common_1.HttpStatus.OK).json(streamer);
        }
        catch (err) {
            return response.status(err.status).json(err.response());
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_streamer_dto_1.CreateStreamerDto]),
    __metadata("design:returntype", Promise)
], StreamerController.prototype, "createStreamer", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StreamerController.prototype, "getStreamers", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], StreamerController.prototype, "getStreamerById", null);
__decorate([
    (0, common_1.Put)("/:id/vote"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], StreamerController.prototype, "voteStreamer", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], StreamerController.prototype, "deleteStreamer", null);
exports.StreamerController = StreamerController = __decorate([
    (0, common_1.Controller)('streamer'),
    __metadata("design:paramtypes", [streamer_service_1.StreamerService])
], StreamerController);
//# sourceMappingURL=streamer.controller.js.map