// رسالة في Console للتأكد أن JavaScript يعمل
console.log("مرحباً بك في موقع محمد راضي باشادي");

// جميع روابط التنقل
const navLinks = document.querySelectorAll(".navbar nav a");

// إضافة حركة بسيطة عند الضغط على روابط القائمة
navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log("تم الانتقال إلى: " + link.textContent);

    });

});