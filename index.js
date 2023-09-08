function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }

const dailyActivities = {
    health: ["go for a jog", "do yoga", "lift weights", "use a new healthy recipe to cook"],
    mind: ["read a book", "watch a personal development video", "practice a new language", "play music"],
    relationships: ["meet a friend for coffee", "call a loved one who is long distance", "buy a gift for someone special", "volunteer for the community"]
}

let todaysActivity = [];
//store selected categorical activity in an array

// Iterate over the object
function getActivity() {
for(let prop in dailyActivities) {
    let optionIdx = generateRandomNumber(dailyActivities[prop].length);
    switch(prop) {
        case 'health':
            todaysActivity.push(`For your health today you should ${dailyActivities[prop][optionIdx]}.`)
          break
        case 'mind':
          todaysActivity.push(`For your mind today you should ${dailyActivities[prop][optionIdx]}.`)
          break
        case 'relationships':
          todaysActivity.push(`For your relationships today you should ${dailyActivities[prop][optionIdx]}.`)
          break
        default:
          todaysActivity.push('There is not enough info.')
      }
}
}
getActivity()
console.log(todaysActivity)