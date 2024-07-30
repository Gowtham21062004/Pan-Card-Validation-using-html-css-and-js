function add(){
    let pan=document.getElementById("pan").value;
    let res=/^[A-Z]{5,}[0-9]{4,}[A-Z]{1,}$/;
    if(pan.match(res)==null){
        alert("Invalid PAN Number")
    }
    else{
        alert("Success")
    }
}

