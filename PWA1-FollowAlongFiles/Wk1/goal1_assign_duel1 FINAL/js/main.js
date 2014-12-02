/**
 * Name: Kayla Simmons
 * Duel Fight Game - Analyze
 * Date: 12/1/14

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){

    console.log("FIGHT!!!"); // Displays "FIGHT!!!" in console

    //player name
    var playerOneName = "Spiderman";  //Sets player one's name to Spiderman
    var playerTwoName = "Batman";  // Sets player two's name to Batman

    //player damage
    var player1Damage = 20; // sets player one damage to 20
    var player2Damage = 20; // sets player two damage to 20

    //player health
    var playerOneHealth = 100; // sets player one starting health to 100
    var playerTwoHealth = 100; // sets player two starting health to 100

    //initiate round
    var round=0; // sets starting round to 0

    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth); // Displays alert box that says "Spiderman:100 *START* Batman:100"
        for (var i = 0; i < 10; i++) // Keeps count of the round (0-9) adding one each time for a total of up to 10 rounds
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5; // sets var minDamage1 to player one's damage times .5 (20 x .5 = 10)
            var minDamage2 = player2Damage * .5; // sets var minDamage2 to player two's damage times .5 (20 x .5 = 10)
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); // creates a random number between 10 and 20 
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2); // creates a random number between 10 and 20 

            //inflict damage
            playerOneHealth-=f1; // takes player one's starting health and subtracts the random number generated to give player one's new health for the next round
            playerTwoHealth-=f2; // takes player two's starting health and subtracts the random number generated to give player two's new health for the next round

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth); // outputs into the console Spiderman: his health Batman: his health

            //check for victor
            var result = winnerCheck(); //sets variable result equal to function winnerCheck
            console.log(result); // logs in the console if there is a winner, one player wins or both players die
            if (result==="no winner") // if the result has no winner then ...
            {
                round++; // increase round by one
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth); // displays an alert box that contains Spiderman:his health *ROUND (enter round here) OVER* Batman: his health

            } else{ //if result is not equal to "no winner" then ...
                alert(result); // displays alert with with result
                break; // breaks the cycle because there is a winner
            };

          };
    };

    function winnerCheck(){ //declares function named winnerCheck
        var result="no winner"; //sets result to noWinner 
        if (playerOneHealth<1 && playerTwoHealth<1) // if both player's health are below 1 then both players die
        {
            result = "You Both Die";// result is equal to You Both Die
        } else if(playerOneHealth<1){ // if only player one's health is less than one then player two wins
            result =playerTwoName+" WINS!!!" //result is Batman WINS!!!
               } else if (playerTwoHealth<1) // if only player two's health is less than one then player one wins
        {
            result = playerOneName+" WINS!!!" // result is Spiderman WINS!!!
        };
       return result; // returns result to result based on output from operations
    };

    /*******  The program gets started below *******/
    fight(); //calls fight function

})();