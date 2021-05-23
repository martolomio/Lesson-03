"use strict"
function show(array){
	console.log(array);
}

var array =[];
show(array);

var products = [1,2,3,4,5, ,8];
array = products[products.length -1];
show(array);

var styles = ['Jas','Bluz'];
console.log(styles);

styles.push('Rok-and-Rol');
console.log(styles);

styles.splice(-2,1,'Classic');
console.log(styles);

console.log(styles.shift());

styles.unshift('Rep','Reggi');
console.log(styles);

styles.find(function find(styles, value){
	if(styles.value== null){
		console.log(value);
	}else{
	return -1;
	}
});

