{
    let a=4;
    const b=3;
    /*++a;
    a+=3;*/

    let c=5;
    let d=6;
    console.log(c<d);
    console.log(c>d);
    console.log(c+d);
    console.log(c-d);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
    console.log(a==b);
    console.log(a===b);

}

{
    let person="";
    let age=18;
    person=age>=18 ? "eligible":"not eligible";
    console.log(person);

    let a=10;
    a="hi";
    a=[];
    a={};
    console.log(a);
}
    
{
    let a=true&&true&&"hi";
    let b=false||1||2;
    console.log(a);
    console.log(b);
}
//if else
let age;
age= prompt("enter the age")
if(age>=13 && age<=19){
    console.log("you are a teenager");
}else if(age >=20 && age<=30){
    console.log("you are youth");
}else {
    console.log("you are adult");
}
//switch
 switch(age){
    case 18:
        console.log("you are a teenager");
        break;
    case 25:
        console.log("you are youth");
        break;
    default:
        console.log("you are adult");
        break;

 }
//for
for(let i=1;i<=10;i++){
    console.log(i);
}

//while
let j=1;
while(j<10){
    console.log(j);
    j++;
}

//do while
let k=1;
do{
    console.log(k);
    k++;
}while(k<=0)

//for in
let person={
    Name=gunny,
    id=3,
    address=qwefe,
}

let colors=["red","orange","blue","green",1,]
for (let color of colors){
    console.log(color);
}
for(i=0;i<=colors.length;i++){
    console.log(colors[i])
}