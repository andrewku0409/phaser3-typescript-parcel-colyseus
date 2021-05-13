import http from 'http'
import express from 'express'
import cors from 'cors'
import { Server } from 'colyseus'
import { monitor } from '@colyseus/monitor'
import { GameRoom } from './rooms/GameRoom'
import IRoomConfig from './interface/IRoomConfig'

const port = Number(process.env.PORT || 2567)
const app = express()

app.use(cors())
app.use(express.json())

const server = http.createServer(app)
const gameServer = new Server({
	server,
})

// register colyseus monitor AFTER registering your room handlers
app.use('/colyseus', monitor())

// Api for create room
app.get('/createRoom/:roomName/:playerNumber/:roundNumber', function (req, res) {
	const roomName = req.params.roomName
	const maxClients = +req.params.playerNumber
	const roundNumber = +req.params.roundNumber

	const roomConfig: IRoomConfig = {
		roomName,
		roundNumber,
		maxClients
	}

	// try define room
	try {
		gameServer.define(roomName, GameRoom, roomConfig)
	} catch (e) {
		console.log(`Failed to creat room ${roomName}`)
		console.log(e)
	}
})


gameServer.listen(port)
console.log(`Listening on ws://localhost:${port}`)