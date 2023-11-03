//Using filter method 
//Output:[ { name: "John Cena", age: 34 }, { name: "John Carte", age: 50 }] 

const employees = [ 

  { name: 'David Carlson', age: 30 }, 

  { name: 'John Cena', age: 34 }, 

  { name: 'Mike Sheridan', age: 25 }, 

  { name: 'John Carte', age: 50 } 

]; 

    let ans=employees.filter((e)=>{
		return e.age>=34
	})
	console.log(ans)