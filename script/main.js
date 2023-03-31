let u = window.location.href;
let a = u.split("pg").pop([0]);
u = a.split(".");
//a = u.pop([1]);
/* console.log(u[0]); */

const start = () => {
  window.location.href = "/pages/pg1.html";
};

const next = () => {
  window.location.href = `/pages/pg${parseInt(u[0]) + 1}.html`;
};

const back = () => {
  window.location.href = `/pages/pg${parseInt(u[0]) - 1}.html`;
};

const backStart = () => {
  window.location.href = `../index.html`;
};

const changeImg = () => {
  document.getElementById("hover").src = "../img/Screenshot_3.png";
};

const norm = () => {
  document.getElementById("hover").src = "../img/Screenshot_2.png";
};

let count = 0;

const attempt = () => {
  count++;

  let t = document.getElementById("code").textContent;
  document.getElementById("working").style.display = "block";
  document.getElementById("code").style.display = "none";

  setTimeout(() => {
    document.getElementById("working").style.display = "none";
    document.getElementById("code").style.display = "block";
    if (count >= 4) {
      document.getElementById("end").style.display = "block";
      document.getElementById("btn-attempt").style.display = "none";
      document.getElementById("press").style.display = "none";
    }
  }, "3000");

  if (count == 1) {
    document.getElementById("code").textContent = "WW YttzJM zt FzcG";
  } else if (count == 2) {
    document.getElementById("code").textContent = "We AttaJM at FacG";
  } else if (count == 3) {
    document.getElementById("code").textContent = "We AttacM at DacG";
  } else if (count >= 4) {
    document.getElementById("code").textContent = "We attack at Dawn";
    document.getElementById("code").style.color = "red";
  }
};
