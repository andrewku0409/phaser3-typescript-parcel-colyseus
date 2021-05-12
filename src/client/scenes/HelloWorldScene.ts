import Phaser from 'phaser'
import * as Colyseus from 'colyseus.js'

export default class HelloWorldScene extends Phaser.Scene {

	private client: Colyseus.Client

	constructor() {
		super('hello-world')
	}

	init(): void {
		this.client = new Colyseus.Client('ws://localhost:2567')
	}

	preload(): void {

	}

	async create(): Promise<void> {
		const room = await this.client.joinOrCreate('my_room')

		console.log(room.id)
		console.log(room.name)

		this.input.keyboard.on('keydown', (evt: KeyboardEvent) => {
			room.send("keydown", evt.key)
		})

		room.onMessage('keydown', (message) => {
			console.log(message)
		})
	}
}
