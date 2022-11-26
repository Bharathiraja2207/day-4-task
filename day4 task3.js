var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data)
    for(var i=0;i<result.length;i++){
        console.log(result[i].name.common,result[i].region,result[i].subregion,result[i].population);
    }
}