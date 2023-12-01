export function dropdownMenue() {
  const header = document.querySelector('header');
  header.style.position = 'relative';
  header.style.zIndex = '2';

  const dropdownButton = document.createElement('div');
  dropdownButton.classList = 'dropdown-menue';
  dropdownButton.innerHTML = `<i class="fas fa-times dropdown-icon"></i><div class="options"></div>`;
  header.appendChild(dropdownButton);

  const options = document.querySelector('.options');
  options.style.display = 'none';

  const htmlFiles = ['memory.html', 'quizgame.html', 'megamario.html', 'index.html'];

  htmlFiles.forEach(htmlFile => {
    const option = document.createElement('div');
    const linkNameArr = htmlFile.split('.');
    if (htmlFile === 'index.html') {
      option.innerHTML = `<a href=./${htmlFile}>start</a>`;
      options.appendChild(option);
    } else {
      option.innerHTML = `<a href=./${htmlFile}>${linkNameArr[0]}</a>`;
      options.appendChild(option);
    }
  });

  dropdownButton.addEventListener('click', () => {
    if (options.style.display === 'block') {
      options.style.display = 'none';
    } else {
      options.style.display = 'block';
    };
  })
}