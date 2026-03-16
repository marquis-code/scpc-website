import {
  WebSocketServer,
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer() server: Server;

  constructor(private readonly chatService: ChatService) {}

  afterInit(server: Server) {
    console.log('Chat Gateway Initialized');
  }

  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('sendMessage')
  async handleMessage(client: Socket, payload: { message: string; userId?: string }) {
    // Echo basic message
    this.server.emit('messageReceived', {
      sender: 'user',
      text: payload.message,
      timestamp: new Date(),
    });

    // Simulate AI response
    const aiResponse = await this.chatService.generateAIResponse(payload.message);
    
    this.server.emit('messageReceived', {
      sender: 'ai',
      text: aiResponse,
      timestamp: new Date(),
    });
  }
}
