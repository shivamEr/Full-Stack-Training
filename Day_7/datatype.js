
0 == "";        // true
1 == "1";       // true
1 == true;      // true

0 === "";       // false
1 === "1";      // false
1 === true;     // false


// let x = new String("John");             
// let y = new String("John");
// if(x == y) console.log("true"); // is false because you cannot compare objects.
// else console.log("false")  

// let c = "Shivam";                    // primitive string
// let d = new String("Shivam");        // String object (not primitive)
// (c == d) // true because d will be converted to string
// (c === d) // is false because x is a string and y is an object.

// Note -> Two Object can't compare directially. But we can compare them using JSON.stringify() method. JSON.stringify() method converts the object into a string and then we can compare them.

