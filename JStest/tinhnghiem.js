var a=prompt("Nhap vao so a: ");
if (isNaN(a)==true){
    alert("a khong phai la so");
}
var b=prompt("Nhap vao so b");
if (isNaN(b)==true){
    alert("b khong phai la so");
}

if (a==0){
    if (b==0){
        alert("Phuong trinh co vo so nghiem");
    }
    else{
        alert("Phuong trinh vo nghiem");
    }
}
else{
    alert("Phuong trinh co nghiem x = "+(-b/a));
}