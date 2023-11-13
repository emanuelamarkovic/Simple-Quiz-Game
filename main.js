// --------- drop-down -------------
const header = document.querySelector('header');
const dropdownButton = document.createElement('div');
dropdownButton.classList = 'dropdown-menue';
// load burger menue icon
fetch('burger-icon.svg')
    .then(response => response.text())
    .then(svgData => {
      svgData = svgData.replace('<svg', '<svg fill="#ffff00"');
      dropdownButton.innerHTML = `<h2 class='dropdown-menue'>${svgData}</h2><div class="options"></div`;
      header.appendChild(dropdownButton);
      const options = document.querySelector('.options');
      options.style.display = 'none';
      //console.log(options);
      const htmlFiles = ['memory.html', 'quizgame.html', 'megamario.html'];
      htmlFiles.forEach(htmlFile => {
        console.log('htmlfile ', htmlFile);
        const option = document.createElement('option');
        const linkNameArr = htmlFile.split('.');
        option.innerHTML = `<a href=${htmlFile}>${linkNameArr[0]}</a>`;
        options[0].appendChild(option);
      })

    dropdownButton.addEventListener('click', () => {
      if (options[0].style.display === 'block') {
        options[0].style.display = 'none';
      } else {
        options[0].style.display = 'block';
      }
    });
})
