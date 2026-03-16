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
exports.MembersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const member_schema_1 = require("./schemas/member.schema");
let MembersService = class MembersService {
    memberModel;
    constructor(memberModel) {
        this.memberModel = memberModel;
    }
    async create(createMemberDto) {
        const createdMember = new this.memberModel(createMemberDto);
        return createdMember.save();
    }
    async findAll() {
        return this.memberModel.find().exec();
    }
    async findOne(id) {
        const member = await this.memberModel.findById(id).exec();
        if (!member)
            throw new common_1.NotFoundException('Member not found');
        return member;
    }
    async findByEmail(email) {
        return this.memberModel.findOne({ email }).exec();
    }
    async update(id, updateMemberDto) {
        const updatedMember = await this.memberModel
            .findByIdAndUpdate(id, updateMemberDto, { new: true })
            .exec();
        if (!updatedMember)
            throw new common_1.NotFoundException('Member not found');
        return updatedMember;
    }
    async delete(id) {
        const result = await this.memberModel.findByIdAndDelete(id).exec();
        if (!result)
            throw new common_1.NotFoundException('Member not found');
        return result;
    }
};
exports.MembersService = MembersService;
exports.MembersService = MembersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(member_schema_1.Member.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], MembersService);
//# sourceMappingURL=members.service.js.map