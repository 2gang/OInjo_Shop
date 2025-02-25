// 카테고리에서 후드 티셔츠를 클릭 시 상품 부분 맨 위에 후드 티셔츠로 표시되도록 하는 소스
const selectName = document.querySelectorAll(".select-name");
const nowCategory = document.querySelector(".now-category");
const selectNameClickEvent = (event) => {
  nowCategory.innerText = event.target.innerText;
};
for (let i = 0; i < selectName.length; i++) {
  selectName[i].addEventListener("click", selectNameClickEvent);
}

const $topBtn = document.querySelector(".move-top-btn");
$topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const $bottomBtn = document.querySelector(".move-bottom-btn");
$bottomBtn.onclick = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};

const redColor = document.querySelectorAll(".red-color");
const articleProductImage = document.querySelectorAll(".article-product-image");
for (let i = 0; i < redColor.length; i++) {
  redColor[i].addEventListener("click", () => {
    articleProductImage[i].src = `images/kakao.png`;
  });
}

const loginCheck = document.querySelector(".login-check");
const updateLink = document.querySelector(".update-link");
const logoutLink = document.querySelector(".logout-link");
const loginLink = document.querySelector(".login-link");
loginCheck.style.display = "none";

window.onload = () => {
  if(loginCheck.textContent == "") {
    updateLink.style.display = "none"
    logoutLink.style.display = "none"
    loginLink.style.display = "flex"
  }
  else if(loginCheck.textContent.length >= 1) {
    updateLink.style.display = "flex"
    logoutLink.style.display = "flex"
    loginLink.style.display = "none"
  }
}
