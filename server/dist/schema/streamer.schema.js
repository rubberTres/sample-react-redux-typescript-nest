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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamerSchema = exports.Streamer = exports.Platform = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var Platform;
(function (Platform) {
    Platform["TWITCH"] = "Twitch";
    Platform["YOUTUBE"] = "YouTube";
    Platform["TIKTOK"] = "TikTok";
    Platform["KICK"] = "Kick";
    Platform["RUBLE"] = "Ruble";
})(Platform || (exports.Platform = Platform = {}));
let Streamer = exports.Streamer = class Streamer {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Streamer.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Streamer.prototype, "platform", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Streamer.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Streamer.prototype, "upVotes", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Streamer.prototype, "downVotes", void 0);
exports.Streamer = Streamer = __decorate([
    (0, mongoose_1.Schema)()
], Streamer);
exports.StreamerSchema = mongoose_1.SchemaFactory.createForClass(Streamer);
//# sourceMappingURL=streamer.schema.js.map