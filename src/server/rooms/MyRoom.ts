import { Room, Client } from 'colyseus'
import { MyRoomState } from './schema/MyRoomState'

export class MyRoom extends Room<MyRoomState> {

	onCreate(): void {
		this.setState(new MyRoomState())

		this.onMessage('type', (client, message) => {
			//
			// handle "type" message
			//
		})

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