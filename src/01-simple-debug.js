// console.log('Simple debugging example running.')
// // debugger

// let x = 99
// // debugger
// console.log(x)

// function gameObject(){
//    return {
//     home: {
//         teamName: "Brooklyn Nets",
//         colors: ["Black, White"],
//         players: {
//            "Alan Anderson":{
//                 number: 0,
//                 shoe: 16,
//                 points: 22,
//                 rebounds: 12,
//                 assists: 12,
//                 steals: 3,
//                 blocks: 1,
//                 slamDunks: 1,
//             },
//             "Reggie Evans":{
//                 number: 30,
//                 shoe: 14,
//                 points: 12,
//                 rebounds: 12,
//                 assists: 12,
//                 steals: 12,
//                 blocks: 12,
//                 slamDunks: 7,
//             },
//             "Brook Lopez":{
//                 number: 11,
//                 shoe: 17,
//                 points: 17,
//                 rebounds: 19,
//                 assists: 10,
//                 steals: 3,
//                 blocks: 1,
//                 slamDunks: 15,
//             },
//              "Mason Plumplee":{
//                 number: 1,
//                 shoe: 19,
//                 points: 26,
//                 rebounds: 12,
//                 assists: 6,
//                 steals: 3,
//                 blocks: 8,
//                 slamDunks: 5,
//             },
//             "Jason Terry":{
//                 number: 31,
//                 shoe: 15,
//                 points: 19,
//                 rebounds: 2,
//                 assists: 2,
//                 steals: 4,
//                 blocks: 11,
//                 slamDunks: 1,
//             },
//         },
//       },
//     away:{
//         teamName: "Charlotte Hornets",
//         colors: ["Turquoise, Purple"],
//         players: {
//             "Jeff Asrien": {
//                 number: 4,
//                 shoe: 18,
//                 points: 10,
//                 rebounds: 1,
//                 assists: 1,
//                 steals: 2,
//                 blocks: 7,
//                 slamDunks: 2
//          },
//             "Bismak Biyombo":{
//                 number: 0,
//                 shoe: 16,
//                 points: 12,
//                 rebounds: 4,
//                 assists: 7,
//                 steals: 7,
//                 blocks: 15,
//                 slamDunks: 10
//              },
//              "DeSagna Diop":{
//                 number: 2,
//                 shoe: 14,
//                 points: 24,
//                 rebounds: 12,
//                 assists: 12,
//                 steals: 4,
//                 blocks: 5,
//                 slamDunks: 5
//              },
//              "Ben Gordon":{
//                 number: 8,
//                 shoe: 15,
//                 points: 33,
//                 rebounds: 3,
//                 assists: 2,
//                 steals: 1,
//                 blocks: 1,
//                 slamDunks: 0
//              },
//              "Brendan Haywood":{
//                 number: 33,
//                 shoe: 15,
//                 points: 5,
//                 rebounds: 12,
//                 assists: 12,
//                 steals: 22,
//                 blocks: 5,
//                 slamDunks: 12
//              }
//         }
//     }
// }
// }

//need to figure out best way to iterate 

function practice() {
 return {
    one: 1,
    two:{
        three: 3,
        four: 4
    }
 }
}
const finder = find
console.log(practice().find(function (matchingNum) {
    if (matchingNum === three) {
        return three
        debugger
    }
}))
// function numPointsScored(player){
    // for in or for of
// //needs to iterate through the each object level till it finds player.
// iterate through home, away
// iterate through teamName, colors, players
// iterate through player names
//  debugger
// }


// function teamColors(team){

// //  return team["colors"];
// }

// function teamNames(){
//    //needs home.teamName and away.teamName
// }

// function playerNumbers(player){
// //same as numPointsScored
// }
// function playerStats(player){
// //same as numPointsScored 
// }
// // console.log(teamNames())
// console.log(numPointsScored("Alan Anderson"))

// let [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');
// let [bessie, , dolly, babe, little] = farmAnimals.split(' ');;
// let [, , blackAndWhite, black, pink] = farmAnimals.split(' ')
// let [red, orange, yellow, green, blue, indigo, violet] = colors;

// let [r, o, y, g, b, , v] = colors;
// let [, , , , , indg, ,] = colors;

// let {muppetName, color, song, job, partner} = muppet;
// let {song2, song4, nestedJob, nestedPartner} = nestedMuppet;