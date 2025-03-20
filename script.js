function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
  }
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  document.querySelectorAll(".close").forEach(closeBtn => {
    closeBtn.addEventListener("click", function () {
      const modalId = this.getAttribute("data-modal");
      closeModal(modalId);
    });
  });
  
  function showNotification(message) {
    const notify = document.getElementById("notify");
    notify.textContent = message;
    notify.style.display = "block";
    setTimeout(() => {
      notify.style.display = "none";
    }, 3000);
  }
  
  const loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", () => openModal("loginModal"));
  
  const loginSubmit = document.getElementById("loginSubmit");
  loginSubmit.addEventListener("click", () => {
    const user = document.getElementById("loginUser").value.trim();
    const pass = document.getElementById("loginPass").value.trim();
    const remember = document.getElementById("loginRemember").checked;
  
    if (!user || !pass) {
      alert("Please fill in both username and password.");
      return;
    }
    closeModal("loginModal");
    if (remember) {
      localStorage.setItem("loggedInUser", user);
    }
    alert(`Login successful! Welcome, ${user}.`);
  });
  const forgotPassLink = document.getElementById("forgotPassLink");
  forgotPassLink.addEventListener("click", (e) => {
    e.preventDefault();
    closeModal("loginModal");
    openModal("resetPasswordModal");
  });

  const resetPasswordSubmit = document.getElementById("resetPasswordSubmit");
  resetPasswordSubmit.addEventListener("click", () => {
    const resetEmail = document.getElementById("resetEmail").value.trim();
    if (!resetEmail) {
      alert("Please enter your email to reset password.");
      return;
    }
    closeModal("resetPasswordModal");
    alert(`A password reset link has been sent to ${resetEmail}.`);
  });
  
  const registerBtn = document.getElementById("registerBtn");
  registerBtn.addEventListener("click", () => openModal("registerModal"));
  
  const registerSubmit = document.getElementById("registerSubmit");
  registerSubmit.addEventListener("click", () => {
    const regUser = document.getElementById("regUser").value.trim();
    const regEmail = document.getElementById("regEmail").value.trim();
    const regPhone = document.getElementById("regPhone").value.trim();
    const regPass = document.getElementById("regPass").value.trim();
    const regPassConfirm = document.getElementById("regPassConfirm").value.trim();
    const regRole = document.getElementById("regRole").value;
  
    if (!regUser || !regEmail || !regPhone || !regPass || !regPassConfirm) {
      alert("Please fill in all registration details.");
      return;
    }
    if (regPass !== regPassConfirm) {
      alert("Passwords do not match!");
      return;
    }
    if (!regRole) {
      alert("Please select a role.");
      return;
    }
    closeModal("registerModal");
    showNotification(`Registration Successful! Welcome, ${regUser}.`);
  });
  const bookNowBtn = document.getElementById("bookNowBtn");
  bookNowBtn.addEventListener("click", () => openModal("bookingModal"));
  
  const bookSessionBtn = document.getElementById("bookSessionBtn");
  bookSessionBtn.addEventListener("click", () => openModal("bookingModal"));
  
  const bookingSubmit = document.getElementById("bookingSubmit");
  bookingSubmit.addEventListener("click", () => {
    const sessionType = document.getElementById("sessionType").value;
    const date = document.getElementById("bookingDate").value;
    const time = document.getElementById("bookingTime").value;
    const name = document.getElementById("bookingName").value.trim();
    const participants = document.getElementById("bookingParticipants").value;
  
    if (!name || !date || !time || !participants) {
      alert("Please fill in all booking details.");
      return;
    }
    closeModal("bookingModal");
    alert(`Thank you, ${name}! Your ${sessionType} session is booked for ${date} at ${time} with ${participants} participant(s).`);
  });
  const bookingParticipants = document.getElementById("bookingParticipants");
  const sessionType = document.getElementById("sessionType");
  const bookingPriceLabel = document.getElementById("bookingPriceLabel");
  
  function updateBookingPrice() {
    let basePrice = (sessionType.value === "Cricket") ? 200 : 180; // Example base prices
    let pCount = parseInt(bookingParticipants.value, 10) || 0;
    let totalPrice = basePrice + (pCount * 10); // Example formula
    bookingPriceLabel.textContent = `Approx. Price: ${totalPrice}/-`;
  }
  sessionType.addEventListener("change", updateBookingPrice);
  bookingParticipants.addEventListener("input", updateBookingPrice);
  const joinBtn = document.getElementById("joinBtn");
  joinBtn.addEventListener("click", () => openModal("joinModal"));
  
  const joinSubmit = document.getElementById("joinSubmit");
  joinSubmit.addEventListener("click", () => {
    const joinName = document.getElementById("joinName").value.trim();
    const joinEmail = document.getElementById("joinEmail").value.trim();
    const joinFocus = document.getElementById("joinFocus").value;
    const joinDays = document.getElementById("joinDays").value.trim();
  
    if (!joinName || !joinEmail) {
      alert("Please fill in your name and email.");
      return;
    }
    closeModal("joinModal");
    alert(`Thanks, ${joinName}! We'll contact you at ${joinEmail} about your focus on ${joinFocus} and availability on ${joinDays}.`);
  });
  const viewProgramsBtn = document.getElementById("viewProgramsBtn");
  viewProgramsBtn.addEventListener("click", () => openModal("programsModal"));
  document.querySelectorAll(".programDetailBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      const info = btn.getAttribute("data-info");
      alert(info);
    });
  });
  const joinFootballBtn = document.getElementById("joinFootballBtn");
  joinFootballBtn.addEventListener("click", () => openModal("joinFootballModal"));
  
  const footballSubmit = document.getElementById("footballSubmit");
  footballSubmit.addEventListener("click", () => {
    const fName = document.getElementById("footballName").value.trim();
    const fEmail = document.getElementById("footballEmail").value.trim();
    const fPosition = document.getElementById("footballPosition").value;
  
    if (!fName || !fEmail) {
      alert("Please fill in your name and email for football coaching.");
      return;
    }
    if (!fPosition) {
      alert("Please select your preferred position.");
      return;
    }
    closeModal("joinFootballModal");
    alert(`Thanks, ${fName}! We'll contact you at ${fEmail} for ${fPosition} training details.`);
  });
  const viewScheduleBtn = document.getElementById("viewScheduleBtn");
  viewScheduleBtn.addEventListener("click", () => openModal("scheduleModal"));
  const menuBtn = document.getElementById("menuBtn");
  menuBtn.addEventListener("click", () => openModal("menuModal"));
  let cartItems = [];
  function addItemToCart(name, price) {
    cartItems.push({ name, price });
    showNotification(`${name} added to order!`);
  }
  function viewCart() {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    let cartMsg = "Your Order:\n";
    let total = 0;
    cartItems.forEach((item, index) => {
      cartMsg += `${index + 1}. ${item.name} - ${item.price}/-\n`;
      total += parseFloat(item.price);
    });
    cartMsg += `\nTotal: ${total.toFixed(2)}/-`;
    const placeOrder = confirm(`${cartMsg}\n\nPlace this order?`);
    if (placeOrder) {
      alert("Order placed successfully!");
      cartItems = [];
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    const menuList = document.querySelector("#menuModal ul");
    if (menuList) {
      const menuItems = menuList.querySelectorAll("li");
      menuItems.forEach(item => {
        const itemText = item.innerHTML;
        const itemParts = itemText.split(" - ");
        if (itemParts.length === 2) {
          const itemName = itemParts[0].replace("<strong>", "").replace("</strong>", "");
          const itemPrice = itemParts[1].replace("$", "");
          item.innerHTML = `${itemParts[0]} - ${itemParts[1]} 
            <button class="order-btn" onclick="addItemToCart('${itemName}', '${itemPrice}')">
            Add</button>`;
        }
      });
      const viewCartBtn = document.createElement("button");
      viewCartBtn.textContent = "View Order";
      viewCartBtn.onclick = viewCart;
      viewCartBtn.style.cssText = "background: #95c11e; color: #000; border: none; border-radius: 5px; padding: 8px 15px; margin-top: 15px; cursor: pointer; font-weight: bold;";
      menuList.parentNode.appendChild(viewCartBtn);
    }
  });
  