//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

 	a - we need to create the players using OOP the player declaration
    should take the name of the player  	==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
		==> player1.addInfo(age, position, level, availability );

	c- and create another function to increase the the level for the player by n value 
		==> player1.increaseLevel(4); 

	d - we need another function to check if the player is available or not it should return true or false
		==> player1.isAvailable();  true / false

	e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

	f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
		sortPalyerBy(arrayOfPlayers, "age");
		sortPalyerBy(arrayOfPlayers, "name");
 */

//writ your code here .....
var arrayOfplayers=[];
function  Player(name) {
	var x =name ;
	return {
		addInfo:function (age,position,level,availability) {
			return addInfo1(age, position,level,availability); 
		}, 
		increaseLevel:function () {
			return increaseLevel1(num);
		},
		isAvailable:function () {
			return isAvailable1();
		},
		decreaseLevel:function(arrayOfplayers) {
			arrayOfplayers.forEach(function (element, i ) {
				if(element.age >30 )
					element.level --; 
			})
			return arrayOfplayers
		},
		sortPalyerBy:function (arrayOfplayers , key) {
			if (key !== undefined ){
				return arrayOfplayers ;
			}
		}
	};
}	




function  addInfo1(name, age, position, level, availability) {
	arrayOfplayers.push({
		name:name,
		age:age, 
		position:position, 
		level:level, 
		availability:availability  
	});
}

addInfo1("ahmad", 22, "player1", 1,true );
addInfo1("mohammed", 27, "player2", 5,true );
addInfo1("salem", 26, "player3", 6,false );
addInfo1("hasan", 35, "player4", 4,false );

function increaseLevel1(arrayOfplayers) {
	arrayOfplyaers.forEach(function (element, i ) {
		element.level ++ ; 
	})
	return arrayOfplayers
}


function isAvailable1() {
return arrayOfplayers.filter(function (result,element) {
			if (element[name] === x ){
		return result && (element.availability === true) ; 
	}
	},true)
	
}






