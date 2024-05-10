// Sidebar
document.addEventListener("DOMContentLoaded", function () {
  // Sidebar toggle
  const hamburgerIcon = document.querySelector(".hamburger-icon-container");
  const sidebar = document.querySelector("aside#sidebar");
  const overlay = document.querySelector(".overlay");

  hamburgerIcon.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    hamburgerIcon.classList.toggle("active");
    overlay.classList.toggle("active");
  });
  overlay.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    hamburgerIcon.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  //   Sidebar menu reveal
  const revealerMenus = document.querySelectorAll(".revealer");

  revealerMenus.forEach((revealerMenu) => {
    revealerMenu.addEventListener("click", () => {
      //  For multiple elements clicks single time
      if (
        document.querySelector(".revealer.active") &&
        document.querySelector(".revealer.active") !== revealerMenu
      ) {
        document.querySelector(".revealer.active")?.classList.toggle("active");
      }

      //   For individual click on menu twice
      revealerMenu.classList.toggle("active");
      if (revealerMenu.classList.contains("active")) {
        revealerMenu.classList.add("active");
      } else {
        revealerMenu.classList.remove("active");
      }
    });
  });

  //

  const nav1Dropdown = document.querySelector(
    "nav ul li:nth-child(1) details.dropdown"
  );

  nav1Dropdown.addEventListener("click", () => {
    nav1Dropdown.classList.toggle("active");
  });

  const nav2Dropdown = document.querySelector(
    "nav ul li:nth-child(2) details.dropdown summary"
  );
  const nav2DropdownIcon = document.querySelector(
    "nav ul li:nth-child(2) details.dropdown summary i"
  );

  nav2Dropdown.addEventListener("click", (e) => {
    nav2Dropdown.parentNode.classList.toggle("active");
  });
  nav2DropdownIcon.addEventListener("click", () => {
    nav2Dropdown.parentNode.classList.toggle("active");
  });

  const navDropClear = document.querySelector(".nav-drop-heading p");
  const nav2Lists = document.querySelectorAll(
    'nav ul li:nth-child(2) details.dropdown summary + ul[role="nav-drop"] li'
  );
  const dropdownBell = document.querySelector(
    'nav#nav ul li:nth-child(2) details.dropdown summary + ul[role="nav-drop"]'
  );
  const clearMsg = document.querySelector(".clear-msg");

  navDropClear.addEventListener("click", () => {
    nav2Lists.forEach((nav2List) => {
      nav2List.style.display = "none";
      clearMsg.style.display = "block";
      if (innerWidth > 500) {
        dropdownBell.style.left = "-202px";
      } else {
        dropdownBell.style.left = "-142px";
      }
    });
  });

  //
  const mainProfile = document.querySelector("nav ul li.main-pro");

  mainProfile.addEventListener("click", () => {
    mainProfile.classList.toggle("active");
  });

  //
  const mainList = document.querySelectorAll("aside#sidebar nav ul li");

  mainList.forEach((mainLi) => {
    mainLi.addEventListener("click", () => {
      if (
        document.querySelector("aside#sidebar nav ul li.active") &&
        document.querySelector("aside#sidebar nav ul li.active") !== mainLi
      ) {
        document
          .querySelector("aside#sidebar nav ul li.active")
          ?.classList.toggle("active");
      }

      mainLi.classList.toggle("active");
      if (mainLi.classList.contains("active")) {
        mainLi.classList.add("active");
      } else {
        mainLi.classList.remove("active");
      }
    });
  });
});
