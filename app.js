for (let i = 0; i < 101; i++) {

    if (i % 2 != 0) {
        console.log(i);
    }

}
// Exercise2
// for (let i = 0; i < 101; i++) {
//     console.log(i)
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("BOTH")

//     } else {
//         if (i % 5 == 0) {
//             console.log("div by 5")
//         } else {
//             if (i % 3 == 0) {
//                 console.log("div by 3")
//             }

//         }

//     }

// } 
// i=0;
// while (i<100) {
//     console.log(i)
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("BOTH")

//     } else {
//         if (i % 5 == 0) {
//             console.log("div by 5")
//         } else {
//             if (i % 3 == 0) {
//                 console.log("div by 3")
//             }

//         }

//     }
// i++
// }

// i=1;
// do {console.log(i)
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("BOTH")

//     } else {
//         if (i % 5 == 0) {
//             console.log("div by 5")
//         } else {
//             if (i % 3 == 0) {
//                 console.log("div by 3")
//             }

//         }

//     }

//     i++
// } while (i < 101);

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for (let i = 0; i < n; i++) {
    if (i=value) {
        console.log("find value")
        break;
    } else {
        console.log("did not find value")
    }
    
}