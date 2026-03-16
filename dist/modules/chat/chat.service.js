"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatService = void 0;
const common_1 = require("@nestjs/common");
let ChatService = class ChatService {
    async generateAIResponse(message) {
        const lowerMessage = message.toLowerCase();
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return 'Hello! I am the SCPSN AI assistant. How can I help you today?';
        }
        if (lowerMessage.includes('conference')) {
            return 'You can find information about upcoming conferences in the Conferences section of our website.';
        }
        if (lowerMessage.includes('membership') || lowerMessage.includes('join')) {
            return 'To become a member, please navigate to the Membership page and fill out the registration form.';
        }
        return "I'm not sure I understand. Could you please provide more details about your inquiry regarding cellular pathology or the association?";
    }
};
exports.ChatService = ChatService;
exports.ChatService = ChatService = __decorate([
    (0, common_1.Injectable)()
], ChatService);
//# sourceMappingURL=chat.service.js.map