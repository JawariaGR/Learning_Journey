"use strict";
//QUESTION NO 32 (CHECKING USERNAME:CREATE A PROGRAM THAT SIMULATES THAT EVERYONE HAS A UNIQUE USERNAME)
// LIST A USER NAME
let USER = ["user_1", "User_2", "User_3", "user_4"];
// LIST A NEW USER SOME PERVIOUS USER IS ALSO INCULDE
let new_user = ["user_1", "User_6", "user_3", "user_7", "user_8"];
new_user.forEach((new_User) => {
    if (USER.some((USER) => USER.toLowerCase() === new_User.toLowerCase())) {
        console.log(`${new_User} will need to enter a new username`);
    }
    else {
        console.log(`${new_User} is available`);
    }
});
