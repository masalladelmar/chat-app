const users = []

const addUser = ({ id, username, room }) => {
  // Clean data
  username = username.trim().toLowerCase()
  room = room.trim().toLowerCase()

  // Validate data
  if (!username || !room) {
    return {
      error: 'Username and room are required'
    }
  }

  // Check for existing user
  const existingUser = users.find(user => user.username === username && user.room === room)

  // Validate username
  if (existingUser) {
    return {
      error: 'Username is in use'
    }
  }

  // Store user
  const user = { id, username, room }
  users.push(user)
  return { user }
}

const removeUser = (id) => {
  const index = users.findIndex(el => el.id === id)
  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
}

const getUser = (id) => {
  return users.find(el => el.id === id)
}

const getUsersInRoom = (room)  => {
  return users.filter(el => el.room === room)
}

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
}