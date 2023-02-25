var x = prompt("Enter your number : ");
console.log(x)
if( x<=100 && x>=80){
    document.write("bravo you in Merit")
}
else if(x<=79 && x>=60) {
    document.write("Ist Division")
}
else if(x<=59 && x>=45){
 document.write("2nd Division ")
}
else if(x<=44 && x>=33){
    document.write("3rd Division DO Hard work")
}else if(x<33){
    document.write("Fail");
}else{
    document.write("Enter valid number")
}
