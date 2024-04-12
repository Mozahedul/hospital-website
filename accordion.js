let btns = document.getElementsByClassName("btn");
let accDetails = document.getElementsByClassName("details");
let icons = document.getElementsByClassName("icon");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    if (accDetails[i].offsetHeight !== accDetails[i].scrollHeight) {
      accDetails[i].style.height = accDetails[i].scrollHeight + "px";
      // accDetails[i].style.padding = 10 + "px";
      icons[i].classList.remove("fa-plus");
      icons[i].classList.add("fa-minus");
    } else {
      accDetails[i].style.height = 0 + "px";
      // accDetails[i].style.padding = 0 + "px";
      icons[i].classList.remove("fa-minus");
      icons[i].classList.add("fa-plus");
    }

    for (let j = 0; j < accDetails.length; j++) {
      console.log(accDetails);
      if (j !== i) {
        accDetails[j].style.height = 0 + "px";
        icons[j].classList.remove("fa-minus");
        icons[j].classList.add("fa-plus");
      }
    }
  });
}
