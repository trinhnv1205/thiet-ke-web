$(document).ready(function () {
  let svgList = document.querySelectorAll('li > span > img');
  // set svg rotate
  svgList.forEach(svg => {
    svg.addEventListener('click', () => {
      svg.classList.toggle('rotate-180');
      svg.parentElement.parentElement.nextElementSibling.classList.toggle('hidden');
    })
  })
  let slideIndex = 1;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  // Function to show a specific slide
  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Remove the "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and mark its corresponding dot as active
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  // Function to advance to the next slide
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Function to navigate to a specific slide
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  // Automatically advance to the next slide every 3 seconds (3000 milliseconds)
  setInterval(function () {
    plusSlides(1);
  }, 5000);

  // Initialize the slider
  showSlides(slideIndex);
  var header1 = document.getElementById("header1");
  var header2 = document.getElementById("header2");
  var buttons = Array.from(document.querySelectorAll("button")).filter(
    (button) => {
      return button.innerText == "Đặt tour";
    }
  );

  buttons.forEach((button) => {
    // set href = "#" attribute from a tag which is parent of button
    button.parentElement.removeAttribute("href");
  });

  // buttons append where div has innerText = "Đặt tour"
  var buttons2 = Array.from(document.querySelectorAll("div")).filter((div) => {
    console.log(div.innerText);
    return div.innerText == "Đặt ngay";
  });

  buttons = buttons.concat(buttons2);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      Swal.fire({
        // show html form for đặt tour
        html: `<div class="form-group">
        <label for="name" class="block text-gray-700 font-bold mb-2">Họ và tên</label>
        <input type="text" class="form-control appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="Nhập họ và tên" required>
      </div>
      <div class="form-group">
        <label for="phone" class="block text-gray-700 font-bold mb-2">Số điện thoại</label>
        <input type="phone" class="form-control appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" placeholder="Nhập số điện thoại" required>
      </div>
      <div class="form-group">
        <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
        <input type="email" class="form-control appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Nhập email" required>
      </div>
     
      <div class="form-group">
        <label for="date" class="block text-gray-700 font-bold mb-2">Ngày khởi hành</label>
        <input type="date" class="form-control appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" required>
      </div>
      <div class="form-group">
        <label for="adult" class="block text-gray-700 font-bold mb-2">Người lớn</label>
        <input type="number" min="1" max="10" value="1" class="form-control appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="adult" required>
      </div>
      <div class="form-group">
        <label for="adult" class="block text-gray-700 font-bold mb-2">Trẻ nhỏ</label>
        <input type="number" min="1" max="10" value="1" class="form-control appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="child" required>
      </div>
      <div class="form-group">
      <label for="content" class="block text-gray-700 font-bold mb-2">Nội dung</label>
      <textarea class="form-control appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="content" rows="3"></textarea>
      </div>`,
        showCancelButton: true,
        confirmButtonText: "Gửi",
        cancelButtonText: "Hủy",
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 2000);
          });
        },

      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            position: "center-center",
            icon: "success",
            title: "Đặt tour thành công",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    });
  });

  window.addEventListener("scroll", function () {
    header1.classList.toggle("bg-white", window.scrollY > 0);
    header1.classList.toggle("text-white", window.scrollY == 0);
    header2.classList.toggle("text-white", window.scrollY == 0);
    header2.classList.toggle("bg-white", window.scrollY > 0);
  });

  // get all element has innerText = "Liên hệ tư vấn"
  var contactButtons = Array.from(document.querySelectorAll("div")).filter(
    (div) => {
      return div.innerText == "Liên hệ tư vấn";
    }
  );

  // set on click will be show modal of sweetalert2
  contactButtons.forEach((button) => {
    button.addEventListener("click", () => {
      Swal.fire({
        title: "Liên hệ tư vấn",
        html: `<div class="form-group" id="contact">
          <label for="name" class="block text-gray-700 font-bold mb-2">Họ và tên</label>
          <input type="text" class="form-control appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="Nhập họ và tên" required>
        </div>
        <div class="form-group">
          <label for="phone" class="block text-gray-700 font-bold mb-2">Số điện thoại</label>
          <input type="phone" class="form-control appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" placeholder="Nhập số điện thoại" required>
        </div>
        <div class="form-group">
          <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" class="form-control appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Nhập email" required>
        </div>
        <div class="form-group">
          <label for="content" class="block text-gray-700 font-bold mb-2">Nội dung</label>
          <textarea class="form-control appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="content" rows="3"></textarea>
        </div>`,
        showCancelButton: true,
        confirmButtonText: "Gửi",
        cancelButtonText: "Hủy",
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 2000);
          });
        },
      }).then((result) => {
        if (result.isConfirmed) {
          var name = document.getElementById("name");
          var phone = document.getElementById("phone");
          var email = document.getElementById("email");
          var content = document.getElementById("content");
          var error = false;
          var errorMessage = "";
          if (name.value == "") {
            name.classList.add("border-red-500");
            error = true;
            name.setAttribute("placeholder", "Vui lòng điền đầy đủ thông tin");
            errorMessage += "Vui lòng điền tên của bạn\n";
          } else {
            name.classList.remove("border-red-500");
          }
          if (phone.value == "") {
            phone.classList.add("border-red-500");
            error = true;
            phone.setAttribute("placeholder", "Vui lòng điền đầy đủ thông tin");
            errorMessage += "Vui lòng điền số điện thoại của bạn\n";
          } else {
            phone.classList.remove("border-red-500");
          }
          if (email.value == "") {
            email.classList.add("border-red-500");
            error = true;
            email.setAttribute("placeholder", "Vui lòng điền đầy đủ thông tin");
            errorMessage += "Vui lòng điền email của bạn\n";
          } else {
            email.classList.remove("border-red-500");
          }
          if (content.value == "") {
            content.classList.add("border-red-500");
            error = true;
            content.setAttribute("placeholder", "Vui lòng điền đầy đủ thông tin");
            errorMessage += "Vui lòng điền nội dung của bạn\n";
          } else {
            content.classList.remove("border-red-500");
          }
          if (!error) {
            Swal.fire({
              position: "center-center",
              icon: "success",
              title: "Gửi liên hệ thành công",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              position: "center-center",
              icon: "error",
              title: errorMessage,
              showConfirmButton: false,
              timer: 1500,
            });

          }
        }
      });
    });
  });

  // when form contact show modal of sweetalert2 let set validate for input to check real time and if input is empty let set placeholder = "Vui lòng điền đầy đủ thông tin" and add class border-red-500 and disable button has class `swal2-confirm swal2-styled` and text is `Gửi`  until all input is not empty and validate email and phone number is correct

  $(document).on('focusout', '#contact input', function () {
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var content = document.getElementById("content");
    var error = false;
    if (name.value == "") {
      name.classList.add("border-red-500");
      error = true;
      // set placeholder = "Vui lòng điền đầy đủ thông tin"
      name.setAttribute("placeholder", "Vui lòng điền đầy đủ thông tin");
    } else {
      name.classList.remove("border-red-500");
    }
    var isNumber = /^\d+$/.test(phone.value);
    if (phone.value == "" || phone.value.length < 10 || !isNumber) {
      phone.classList.add("border-red-500");
      error = true;
      phone.setAttribute("placeholder", "Vui lòng điền đầy đủ thông tin");
    } else {
      phone.classList.remove("border-red-500");
    }
    if (email.value == "" || !email.value.includes('@')) {
      email.classList.add("border-red-500");
      error = true;
      email.setAttribute("placeholder", "Vui lòng điền đầy đủ thông tin");
    } else {
      email.classList.remove("border-red-500");
    }
    if (content.value == "") {
      content.classList.add("border-red-500");
      error = true;
      content.setAttribute("placeholder", "Vui lòng điền đầy đủ thông tin");
    } else {
      content.classList.remove("border-red-500");
    }
    if (!error) {
      $('#contact button').removeAttr('disabled');
    } else {
      $('#contact button').attr('disabled', 'disabled');
    }
  })



})