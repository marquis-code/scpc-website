"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const abstracts_service_1 = require("./abstracts.service");
const abstracts_controller_1 = require("./abstracts.controller");
const abstract_schema_1 = require("./schemas/abstract.schema");
let AbstractsModule = class AbstractsModule {
};
exports.AbstractsModule = AbstractsModule;
exports.AbstractsModule = AbstractsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: abstract_schema_1.Abstract.name, schema: abstract_schema_1.AbstractSchema }]),
        ],
        controllers: [abstracts_controller_1.AbstractsController],
        providers: [abstracts_service_1.AbstractsService],
        exports: [abstracts_service_1.AbstractsService],
    })
], AbstractsModule);
//# sourceMappingURL=abstracts.module.js.map