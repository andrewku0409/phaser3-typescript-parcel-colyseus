import { Room, Client } from 'colyseus'
import IRoomConfig from '../interface/IRoomConfig'
import { GameRoomState } from './schema/GameRoomState'

export class GameRoom extends Room<GameRoomState> {
	onCreate(roomConfig: IRoomConfig): void {
		this.roomName = roomConfig.roomName
		this.maxClients = roomConfig.maxClients

		this.setState(new GameRoomState({ roundNumber: roomConfig.roundNumber }))
	}

	onJoin(client: Client): void {
		console.log(client.sessionId, 'joined!')
	}

	onLeave(client: Client, consented: boolean): void {
		console.log(client.sessionId, 'left!')
	}

	onDispose(): void {
		console.log('room', this.roomId, 'disposing...')
	}

}