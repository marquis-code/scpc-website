import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  async generateAIResponse(message: string): Promise<string> {
    // For now, providing a structured mock response.
    // In a real scenario, this would call an LLM API (OpenAI/Claude)
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
}
