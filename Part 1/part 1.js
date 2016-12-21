//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to 
	pass all your class students one by one ? think of a way to pass them in your function
	*/
// write your code here ...
var students =[];
function student(name, age, education, nationality ) {
	students.push({
		name:name,
		age:age,
		education:education,  
		nationality:nationality,
	})
}

student("Marwa", 24, "SW", "Syrian")
student("Sahar", 26, "ComputerEng", "Jordanian")

function showFriend(friend){
	return friend.name +" with the age of "+friend.age +" and with "+ friend.education + " education"; 
} 



function avergeStudents(students) {
	var age=0, x= 0 ;
	for (var i=0; i<students.length ; i++){
		age += students[i].age ; 
		x++;
	}
	return age / x;
}

/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers
  between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
	*/
// write your code here ...
function  square(x) {
	return x*x; 
}

function rangeSquared(x,y) {
	var array = [] ; 
	if (x %2 !==0){
		return "null"
	}else if (x%2===0 && y === undefined){
		return square(x)
	} else {
		for (var i = x ; i< y ; i++){
			array.push(square(x)); 
			x++;
		} 
		array.push(square(y));
		return array;
	}
}


/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
	*/

// write your code here ....
function leader(array){
	var newArray=[];
	for (var i = 0; i < array.length; i++) {
		if (array[i] > array[i+1]){
			newArray.push(array[i])
			i++;
		}else{
			newArray.push(array[i+1])
		}   
	}
	return newArray ; 
}
