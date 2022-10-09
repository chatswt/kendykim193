<?php
//Khai báo sử dụng session
session_start();
 
//Khai báo utf-8 để hiển thị được tiếng việt
header('Content-Type: text/html; charset=UTF-8');
 
//Xử lý đăng nhập
if (isset($_POST['dangnhap'])) 
{
    //Kết nối tới database
    include('ketnoi.php');
     
    //Lấy dữ liệu nhập vào
    $username = addslashes($_POST['uname']);
    $password = addslashes($_POST['psw']);
     
    //Kiểm tra đã nhập đủ tên đăng nhập với mật khẩu chưa
    if (!$username || !$password) {
        echo "Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu. <a href='javascript: history.go(-1)'>Trở lại</a>";
        exit;
    }
     
    // mã hóa pasword
    $password = md5($password);
     
    //Kiểm tra tên đăng nhập có tồn tại không
    $query = mysql_query("SELECT username, password FROM member WHERE username='$username'");
    if (mysql_num_rows($query) == 0) {
        echo "Tên đăng nhập này không tồn tại. Vui lòng kiểm tra lại. <a href='javascript: history.go(-1)'>Trở lại</a>";
        exit;
    }
     
    //Lấy mật khẩu trong database ra
    $row = mysql_fetch_array($query);
     
    //So sánh 2 mật khẩu có trùng khớp hay không
    if ($password != $row['password']) {
        echo "Mật khẩu không đúng. Vui lòng nhập lại. <a href='javascript: history.go(-1)'>Trở lại</a>";
        exit;
    }
     
    //Lưu tên đăng nhập
    $_SESSION['username'] = $username;
    echo "Xin chào " . $username . ". Bạn đã đăng nhập thành công. <a href='/'>Về trang chủ</a>";
    die();
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="Image/logodauweb.jpg">
    <link rel="stylesheet" type="text/css" href="tonghop.css"><!--THEME CHO HTML-->
    <link rel="stylesheet" type="text/css" href="CSS/Navbar-with-Icons.css"><!--LINK NAVBAR CSS ICON CHO HOME-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <!-- CODE TỪ BÊN THỨ 3 HOME -->
    <link rel="stylesheet" type="text/css" href="CSS/login.css"> <!--LINK LOGIN CSS-->
    <title>Đăng nhập</title>
</head>
<body>
    <center>
    <img id="th1" src="Image/dangnhap.png">
    <!--CODE HOME-->
    <div class="navbar">
        <a href="index.html"><i class="fa fa-fw fa-home"></i> Home</a>
        <a href="#"><i class="fa fa-fw fa-search"></i> Search</a>
        <a href="hotro.html"><i class="fa fa-fw fa-info"></i> About</a>
        <a class="active" href="dangnhap.html"><i class="fa fa-fw fa-user"></i> Login</a>
    </div>
    <br>
    <!--CODE ĐĂNG NHẬP TẠI ĐÂY-->
    <form action="dangnhap.php?do=login" method="post">
        <div class="imgcontainer">
          <img src="Image/logodauweb.jpg" alt="Avatar" class="avatar">
        </div>
      
        <div class="container" cellpadding='0' cellspacing='0' border='1'>
          <label for="uname"><b>Tài khoản</b></label>
          <input type="text" placeholder="Vui lòng nhập tên tài khoản" name="uname" required>
      
          <label for="psw"><b>Mật khẩu</b></label>
          <input type="password" placeholder="Vui lòng nhập mật khẩu" name="psw" required>
      
          <button type="submit">ĐĂNG NHẬP</button>
          <button>ĐĂNG KÝ</button>
          <label>
            <input type="checkbox" checked="checked" name="remember"> Duy trì tài khoản cho lượt đăng nhập sau!
          </label>
        </div>
      
        <div class="container" style="background-color:#f1f1f1">
          <button type="button" class="cancelbtn">Cancel</button>
          <span class="psw">Quên <a href="#">mật khẩu?</a></span>
        </div>
      </form>
    </center>
</body>
</html>