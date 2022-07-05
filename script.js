const mainDiv = document.getElementById('div-tabela');
const primeiraCor = document.querySelector('.black');
const segundaCor = document.querySelector('.blue');
const terceiraCor = document.querySelector('.pink');
const quartaCor = document.querySelector('.green');
const colorPalette = document.querySelectorAll('.color');

// Cria tabela com o tamanho de 5x5
function criarTabela() {
  const tabela = document.createElement('table');
  tabela.setAttribute('id', 'pixel-board');
  mainDiv.appendChild(tabela);
  for (let i = 0; i < 5; i += 1) {
    const linha = document.createElement('tr');
    tabela.appendChild(linha);
    for (let y = 0; y < 5; y += 1) {
      const coluna = document.createElement('td');
      coluna.setAttribute('class', 'pixel');
      linha.appendChild(coluna);
    }
  }
}
criarTabela();

// cor preta selecionada como inicial cada vez que a página recarrega
window.onload = () => {
  primeiraCor.classList.add('selected');
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      pixels[i].style.backgroundColor = 'rgb(0, 0, 0)';
    });
  }
};

primeiraCor.addEventListener('click', () => {
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].classList.remove('selected');
  }
  primeiraCor.classList.add('selected');
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      pixels[i].style.backgroundColor = 'rgb(0, 0, 0)';
    });
  }
});

segundaCor.addEventListener('click', () => {
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].classList.remove('selected');
  }
  segundaCor.classList.add('selected');
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', () => {
      pixels[i].style.backgroundColor = 'rgb(70, 130, 180)';
    });
  }
});

terceiraCor.addEventListener('click', () => {
    for (let i = 0; i < colorPalette.length; i += 1) {
      colorPalette[i].classList.remove('selected');
    }
    terceiraCor.classList.add('selected');
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].addEventListener('click', () => {
        pixels[i].style.backgroundColor = 'rgb(219, 112, 147)';
      });
    }
  });

  quartaCor.addEventListener('click', () => {
    for (let i = 0; i < colorPalette.length; i += 1) {
      colorPalette[i].classList.remove('selected');
    }
    quartaCor.classList.add('selected');
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].addEventListener('click', () => {
        pixels[i].style.backgroundColor = 'rgb(34, 139, 34)';
      });
    }
  });
