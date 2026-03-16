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
exports.AbstractsController = void 0;
const common_1 = require("@nestjs/common");
const abstracts_service_1 = require("./abstracts.service");
let AbstractsController = class AbstractsController {
    abstractsService;
    constructor(abstractsService) {
        this.abstractsService = abstractsService;
    }
    create(createAbstractDto) {
        return this.abstractsService.create(createAbstractDto);
    }
    findAll(conferenceId) {
        if (conferenceId) {
            return this.abstractsService.findByConference(conferenceId);
        }
        return this.abstractsService.findAll();
    }
    update(id, updateAbstractDto) {
        return this.abstractsService.update(id, updateAbstractDto);
    }
};
exports.AbstractsController = AbstractsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AbstractsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('conferenceId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AbstractsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AbstractsController.prototype, "update", null);
exports.AbstractsController = AbstractsController = __decorate([
    (0, common_1.Controller)('abstracts'),
    __metadata("design:paramtypes", [abstracts_service_1.AbstractsService])
], AbstractsController);
//# sourceMappingURL=abstracts.controller.js.map