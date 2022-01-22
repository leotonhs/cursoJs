const data = new Date('1987-04-21 00:00:00');
let diaSemana = data.getDay();
let diaSemanaTexto;

if (diaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexto = 'Segunda';
} else if (diaSemana === 2) {
    diaSemanaTexto = 'terça';
} else if (diaSemana === 3) {
    diaSemanaTexto = 'quarta';
} else if (diaSemana === 4) {
    diaSemanaTexto = 'quinta';
} else if (diaSemana === 5) {
    diaSemanaTexto = 'sexta';
} else if (diaSemana === 6) {
    diaSemanaTexto = 'sábado';
} else {
    diaSemanaTexto = '';
}

console.log(diaSemana, diaSemanaTexto);