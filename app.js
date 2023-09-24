
//Toast funciton
function toast({
    title = '', 
    message ='' , 
    type = 'info', 
    duration = 3000
}) {
    const main = document.getElementById('toast')
    if(main) {
        const toast = document.createElement('div');
        //Auto remove
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);
        //Remove khi nhấn nút close
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                //Khi clear thì autoRemoveId k chạy nữa. Nếu nó chạy thì sẽ lỗi
                clearTimeout(autoRemoveId);
            }
        }
        const icons = {
            success: 'fa-solid fa-check',
            info: 'fa-solid fa-info',
            warn: 'fa-solid fa-exclamation',
            error: 'fa-solid fa-triangle-exclamation',

        }
        //Dựa vào cái type mà gọi ra icon tương đương
        const icon = icons[type];
        
        const delay = (duration / 1000).toFixed(2);//Trường hợp ra số thập phân thì toFixed(2) là lấy 2 số thập phân

        //Tạo thẻ div cha của toast
        toast.classList.add('toast',`toast--${type}`)//toast --${type} là toast--success đã CSS
        /* hiệu ứng đi từ bên phải */ /* Hiệu ứng mờ dần . 3s là thời gian delay*/
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
            <div class="toast__icon">
                    <i class="${icon}"></i>
            </div>
        
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
        
            <div class="toast__close">
                <i class="fa-solid fa-x"></i>
            </div>
        `;
        main.appendChild(toast);

        
    }
    
}

//Khi bấm nút success
function showSuccessToast() {
    toast({
        title: 'Thành công',
        message: 'Bạn đã đăng ký thành công tài khoải tại F8',
        type: 'success',
        duration: 5000
    });
}

//Khi bấm nút error
function showErorToast() {
    toast({
        title: 'Thất bại ',
        message: 'Có lỗi xảy ra vui lòng liên hệ quản trị viên',
        type: 'error',
        duration: 5000
    });
}


