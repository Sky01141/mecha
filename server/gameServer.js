// Wires Socket.IO events to managers. Every owner event MUST pass ownerManager.assertOwner(socket).
const players = require('./playerManager');
const rooms = require('./roomManager');
const bans = require('./banManager');

function attachGameServer(io) {
  io.on('connection', (socket) => {
    // TODO: check bans.isBanned(...) before accepting
    players.add(socket);
    socket.emit('server:connected', { id: socket.id });
    socket.on('disconnect', () => players.remove(socket));
    // TODO: room:create / room:join / quick:match / chat / paint:update / scan
  });
}
module.exports = { attachGameServer };
