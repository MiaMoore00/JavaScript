let toDoList =
 ["Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom"
]

let roomatesToDoList = ["Take out Trash", 
"Clean Bathroom"
]
   

function canPlayVideoGames(arrayOfChores) {
  let numberOfChores = arrayOfChores.length;

  if (numberOfChores < 3) {
    console.log ("you can go play some videos games!")
} else if  (numberOfChores > 3) {
    console.log ("No games! Do some Chores")
}
};
canPlayVideoGames(roomatesToDoList)