const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const visible = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', visible);
});

document.querySelectorAll('.chips button').forEach((button) => button.addEventListener('click', () => {
  document.querySelector('.chips .active').classList.remove('active');
  button.classList.add('active');
}));

document.querySelector('#inquiry-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(event.currentTarget).get('name');
  document.querySelector('.form-result').textContent = `${name}님, 문의가 접수되었습니다. 여행플러스협동조합에서 곧 연락드릴게요.`;
  event.currentTarget.reset();
});
