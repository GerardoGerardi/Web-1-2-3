function Task2(v1,v2){
if(isNaN(v1) && isNaN(v2))
{
	if(isNaN(v1) || isNaN(v2)){
			var sum=v1 + v2;
		}
	}
		else{
			var v1=parseFloat(v1);
			var v2=parseFloat(v2);
			var sum=v1 + v2;
		}
	return sum;
}

function Function2(){
var v1 =document.getElementById("field3").value;
var v2 = document.getElementById("field4").value;
document.getElementById("sum12").value=Task2(v1,v2);
}
