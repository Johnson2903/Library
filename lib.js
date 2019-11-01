
function myAdd(){
	if (firstone.value=="" || secondone.value=="" || thirdone.value=="" ) {
alert("THe space must not be empty");
// console.log("THe place must not be empty");
	}


	else{
	var myarr=JSON.parse(localStorage.NewLib);
	var Myobj={
		BookName :firstone.value,
		AuthorName:secondone.value,
		PagesofBook: thirdone.value
		// files: fourthone.value
	}

	myarr.push(Myobj)
	var m=localStorage.NewLib=JSON.stringify(myarr)
	JSON.parse(localStorage.NewLib);}
	
}

function myview(){
	u=JSON.parse(localStorage.NewLib);
	var res = '';
	for (var i = 0; i< u.length; i++) {
		var y="<td>" + u[i].BookName+"</td>" +"<td>"+ u[i].AuthorName+"</td>" +
		 "<td>"+ u[i].PagesofBook+"</td>" 
		 // + "<td>"+ u[i].files+"</td>"
		var at="<tr>" +y+"</tr>"
 
	res+=at;

	}
	tt.innerHTML = res;
	

	console.log(u)

}

function myclean(){
	firstone.value=""
	secondone.value=""
	thirdone.value=""
};