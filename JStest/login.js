function Login(){
    var account= document.getElementById("txtAccount").value;
    var password= document.getElementById("txtPassword").value;
    var txtMessage= document.getElementById("message");
    if (account==""){
        txtMessage.innerHTML="Chưa nhập tài khoản";
        txtMessage.style.color="red";
        return;
    }
    if (password==""){
        txtMessage.innerHTML="Chưa nhập mật khẩu";
        txtMessage.style.color="red";
        return;
    }
    if (account=="admin"&&password=="123"){
        txtMessage.innerHTML="Đăng nhập thành công";
        txtMessage.style.color='blue';        
    }
    else{
        txtMessage.innerHTML="Tên tài khoản hoặc mật khẩu chưa chính xác!";
        txtMessage.style.color='red';
    }
}
function Redirect() {
    window.location="fb.com";
 }