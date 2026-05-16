/*
  초보자 수정 안내:
  아래 문장을 바꾸면 연락처 버튼을 눌렀을 때 나오는 메시지를 바꿀 수 있습니다.
*/
const contactMessage = "개인정보 보호를 위해 이메일 주소는 공개하지 않았습니다.\n문의가 필요하다면 연결된 프로필이나 공개 채널을 통해 연락해 주세요!";

// HTML에서 연락처 버튼과 다크 모드 버튼을 찾습니다.
const contactButton = document.querySelector("#contactButton");
const themeButton = document.querySelector("#themeButton");

// 연락처 버튼을 클릭하면 안내 메시지를 보여줍니다.
contactButton.addEventListener("click", () => {
  alert(contactMessage);
});

// 다크 모드 버튼을 클릭하면 body에 dark-mode 클래스를 켜고 끕니다.
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // 현재 다크 모드인지 확인해서 버튼 글자를 바꿉니다.
  const isDarkMode = document.body.classList.contains("dark-mode");
  themeButton.textContent = isDarkMode ? "라이트 모드" : "다크 모드";
});
