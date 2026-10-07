// Player registry, server-side position/state validation
const players = new Map();
module.exports = {
  add: (socket) => players.set(socket.id, { id: socket.id, name: '', room: null }),
  remove: (socket) => players.delete(socket.id),
  all: () => [...players.values()],
};
