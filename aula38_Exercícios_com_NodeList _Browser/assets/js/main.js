const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of paragrafos) {
    // com style acessamos as propriedades do css, no caso por não poder utilizar
    // no javascript, background-color deve ser convertido para backgroundColor
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#ffffff'
}