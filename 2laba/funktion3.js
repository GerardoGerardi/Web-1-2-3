var CreateArr=[];
	function CreateArrN(){
		var values=document.getElementById("field5").value;
		CreateArr.push(values);
		document.getElementById("field5").value='';
	}

function Function3(){

	for(var j=0;j<CreateArr.length;j++){
			if(+CreateArr[j]){
				CreateArr[j]=parseFloat(CreateArr[j]);
				CreateArr[j]*=CreateArr[j];
			}
			else{
				CreateArr[j]='0';
			}
		}
var str='';
		for(var j=0;j<CreateArr.length;j++){
			str= str+"'"+CreateArr[j]+"' ";
		}
		document.getElementById("field6").value=str;

}