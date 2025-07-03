let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
document.querySelector('.icons a').addEventListener('click', function(event) {
    if (isLoggedIn) {
        if (confirm('Bạn đã đăng nhập rồi! Bạn có muốn đăng xuất không?')) {
            localStorage.setItem('isLoggedIn', 'false'); // Đăng xuất
            isLoggedIn = false; // Cập nhật trạng thái đăng nhập
            alert('Bạn đã đăng xuất thành công!');
        }
    } else {
        window.location.href = '/login.html'; // Chuyển hướng đến trang đăng nhập
    }
});

document.querySelector('.buy-now').addEventListener('click', function() {
    if (isLoggedIn === false) {        
        alert('Bạn cần đăng nhập để mua hàng!');
        // Có thể chuyển hướng đến trang đăng nhập nếu cần
        window.location.href = '/login.html'; // Chuyển hướng đến trang đăng nhập
       
    } else {
        document.getElementById('popup').style.display = 'block';
    }
});





