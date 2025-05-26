const menuItems = document.querySelectorAll(".menu-item");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");
const theme = document.querySelector("#theme");
const themeModel = document.querySelector(".theme-castomize");
const showRightSidebar = document.getElementById("showRightSidebar");
const showLeftSidebar = document.getElementById("showLeftSidebar");
const settingTheme = document.getElementById("settingTheme");
const fontSize = document.querySelectorAll(".chose-size span");
const color_palette = document.querySelectorAll(".chose-color span");
var root = document.querySelector(":root");
const bg1 = document.querySelector(".background-1");
const bg2 = document.querySelector(".background-2");
const bg3 = document.querySelector(".background-3");

{
  //remove active class from menu
  const changeActive = () => {
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });
  };
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      changeActive();
      item.classList.add("active");
      if (item.id != "notifications") {
        document.querySelector(".notifications-popup").style.display = "none";
      } else {
        document.querySelector(".notifications-popup").style.display = "block";
        document.querySelector(
          "#notifications .notification-count"
        ).style.display = "none";
      }
    });
  });
}

{
  //Start Messages
  //Search Chat
  searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach((chat) => {
      let name = chat.querySelector("h4").textContent.toLowerCase();
      if (name.indexOf(val) != -1) {
        chat.style.display = "flex";
      } else {
        chat.style.display = "none";
      }
    });
  };
  messageSearch.addEventListener("keyup", searchMessage);
  //Search Chat

  //show highlight when click on Message Notification
  document
    .querySelector("#messege-notifications")
    .addEventListener("click", () => {
      messages.style.boxShadow = "0 0 1rem var(--color-primary)";
      document.querySelector(
        "#messege-notifications .notification-count"
      ).style.display = "none";
      setTimeout(() => {
        messages.style.boxShadow = "none";
      }, 2000);
    });

  //End Messages
}

//start theme customization
//openThemeModel
const openThemeModel = () => {
  console.log("object");
  themeModel.style.display = "grid";
};
//closeThemeModel
const closeThemeModel = (e) => {
  if (e.target.classList.contains("theme-castomize")) {
    console.log("object");
    themeModel.style.display = "none";
  }
};
themeModel.addEventListener("click", closeThemeModel);

theme.addEventListener("click", openThemeModel);

//end theme customization

{
  //================font==========
  //remove active font size
  const removeActiveFont = () => {
    fontSize.forEach((size) => {
      size.classList.remove("active");
    });
  };
  fontSize.forEach((size) => {
    size.addEventListener("click", () => {
      removeActiveFont();
      let fontSize;
      size.classList.toggle("active");

      if (size.classList.contains("font-size-1")) {
        fontSize = "10px";
      } else if (size.classList.contains("font-size-2")) {
        fontSize = "13px";
      } else if (size.classList.contains("font-size-3")) {
        fontSize = "16px";
      } else if (size.classList.contains("font-size-4")) {
        fontSize = "19px";
      } else if (size.classList.contains("font-size-5")) {
        fontSize = "22px";
      }
      document.querySelector("html").style.fontSize = fontSize;
    });
  });
  //================font==========
}

{
  //change Primary Color
  //remove active color
  const removeActiveColor = () => {
    color_palette.forEach((color) => {
      color.classList.remove("active");
    });
  };

  color_palette.forEach((color) => {
    color.addEventListener("click", () => {
      console.log("object");
      if (color.classList.contains("color-1")) {
        primaryHue = 252;
      } else if (color.classList.contains("color-2")) {
        primaryHue = 52;
      } else if (color.classList.contains("color-3")) {
        primaryHue = 352;
      } else if (color.classList.contains("color-4")) {
        primaryHue = 152;
      } else if (color.classList.contains("color-5")) {
        primaryHue = 202;
      }
      removeActiveColor();
      color.classList.add("active");
      root.style.setProperty("--primary-color-hue", primaryHue);
    });
  });
}

//change background color for body
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

const changeBG = () => {
  root.style.setProperty("--color-light-lightness", lightColorLightness);
  root.style.setProperty("--color-dark-lightness", darkColorLightness);
  root.style.setProperty("--color-white-lightness", whiteColorLightness);
};
bg1.addEventListener("click", () => {
  bg1.classList.add("active");

  bg2.classList.remove("active");
  bg3.classList.remove("active");
  window.location.reload();
});
bg2.addEventListener("click", () => {
  console.log("object");
  lightColorLightness = "20%";
  darkColorLightness = "95%";
  whiteColorLightness = "15%";

  bg2.classList.add("active");
  bg1.classList.remove("active");
  bg3.classList.remove("active");
  changeBG();
});
bg3.addEventListener("click", () => {
  console.log("object");
  lightColorLightness = "0%";
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  bg3.classList.add("active");

  bg2.classList.remove("active");
  bg1.classList.remove("active");
  changeBG();
});
// showRightSidebar>>>>>>>
showRightSidebar.addEventListener("click", (e) => {
  console.log(e.target);
});
// showLeftSidebar>>>>>>>
showLeftSidebar.addEventListener("click", (e) => {
  console.log(e.target);
});
// showLeftSidebar>>>>>>>
settingTheme.addEventListener("click", (e) => {
  console.log(e.target);
  openThemeModel();
});
