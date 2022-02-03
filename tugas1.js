//for 

var myStringArray = ["Hello","World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
  
}

//for in

var array = ['5', '4', '1'];

for (var i in array) {
    console.log(array[i]);
}

//for of

var colors = ['red', 'green', 'blue'];
for (const color of colors){
    console.log(color);
}

// do while

var i = 0;
do {
  console.log(i);
  i++;
} while (i <= 10);

// forEach(array looping)

var i = [2, 3, 4, 3, 2];
i.forEach((el) => {
  console.log(el);
});