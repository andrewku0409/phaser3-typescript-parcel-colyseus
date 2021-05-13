import { Schema, ArraySchema, Context, type } from '@colyseus/schema'

export class GameRoomState extends Schema {
	@type('number')
	roundNumber = 0;

	@type('number')
	currentRound = 0;

	constructor({ roundNumber }: { roundNumber: number }) {
		super()
		this.roundNumber = roundNumber
	}

	// maxPlayer: playerNumber,
	// round: roundNumber,
	// currentRound: 0,
	// currentPlayerIdIterator: null,
	// timeLeft: 30,
	// isGameOn: false,
	// players: {},
	// sockets: {},
	// playerOrder: []


}