data=document.getElementsByClassName("btn");
console.log(data);

function filterSelection(data){
    var i;
    title=data.split("_");
    viewTable=document.getElementsByClassName("filterdiv");
    //view=viewTable.split("_");
    console.log(viewTable);

    
    //console.log(view);
    for (i=0;i<title.length;i++){
        console.log(title[i]);
    }
    /*
    x=document.getElementById("container");
    
    if(x.style.display ==="none"){
        x.style.display = "block";
    }else{
        x.style.display="none";
    }
    */
}

