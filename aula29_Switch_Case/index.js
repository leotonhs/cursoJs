const data = new Date('1987-04-26 00:00:00');
let diaSemana = data.getDay();
// diaSeemana = 7;
let diaSemanaTexto;

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = '';
        break;

}



// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'terça';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'quarta';
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'quinta';
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'sexta';
// } else if (diaSemana === 6) {
//     diaSemanaTexto = 'sábado';
// } else {
//     diaSemanaTexto = '';
// }

console.log(diaSemana, diaSemanaTexto);