const generateMessage = (username, text) => {
  return {
    username,
    text,
    createdAt: new Date().getTime()
  }
}

const generateLocation = (username, location) => {
  return {
    username,
    url: `https://google.com/maps?q=${location.latitude},${location.longitude}`,
    createdAt: new Date().getTime()
  }
}

module.exports = {
  generateMessage,
  generateLocation
}