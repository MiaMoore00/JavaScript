const toDoList = ["Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom"
]

const numberOfChores = toDoList.length;

for (var i=toDoList.length; i > 2; i--) {
    console.log(toDoList.pop());
}

console.log(toDoList); 