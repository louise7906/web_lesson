function addNumber(){
    let a = document.getElementById("input_a").value;
    let b= document.getElementById("input_b").value;
    document.getElementById("value_a").innerHTML=a;
    document.getElementById("value_b").innerHTML=b;
    document.getElementById("value_c").innerHTML=Number(a)+Number(b)
}
