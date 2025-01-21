const userName = prompt("Ismingizni kiriting");
const userClr = prompt("Qanday rangligini tanlang 1)YASHIL 2)SARIQ 3)QIZIL");
const userBgClr = prompt("Qanday rangligini tanlang 1)QORA 2)KO'K 3)AQUA");

const Namee = document.createElement("h1");
Namee.textContent = (userName);
if(userClr == "" || userName == "" || userBgClr == ""){
    alert("Hech nima kiritmadingiz");
}else if(userClr == "1"){
    Namee.style.color = "green";
}else if(userClr == "2"){
    Namee.style.color = "yellow";
}else if(userClr == "3"){
    Namee.style.color = "red";
}else{
    Namee.textContent = ("Noto'g'ri rang tanladingiz");
}
if(userBgClr == "1"){
    document.body.style.backgroundColor = "black";
}else if(userBgClr == "2"){
    document.body.style.backgroundColor = "blue";
}else if(userBgClr == "3"){
    document.body.style.backgroundColor = "aqua";
}else{
    Namee.textContent = ("Noto'g'ri rang tanladingiz");
}
document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.height = "100vh";

document.body.append(Namee);

