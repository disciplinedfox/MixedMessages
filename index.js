function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }

const dailyActivities = {
    health: ["going for a jog", "doing yoga", "lifting weights", "using a new healthy recipe to cook"],
    mind: ["reading a book", "watching a personal development video", "practicing a new language", "playing music"],
    relationships: ["meeting a friend for coffee", "calling a loved one who is long distance", "buying a gift for someone special", "volunteering for the community"]
}