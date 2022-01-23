const h1 = document.querySelector('.container h1');
const data = new Date();

//functions

function textWeek(dayOfTheWeekText) {
    let text;
    switch (dayOfTheWeekText) {
        case 0:
            text = `Domingo`;
            return text;
        case 1:
            text = `Segunda-feira`;
            return text;
        case 2:
            text = `Terça-feira`;
            return text;
        case 3:
            text = `Quarta-feira`;
            return text;
        case 4:
            text = `Quinta-feira`;
            return text;
        case 5:
            text = `Sexta-feira`;
            return text;
        case 6:
            text = `Sábado`;
            return text;
        default:
            return text = `Erro`;
    }
}

function textMonth(month) {
    let text;
    switch (month) {
        case 0:
            text = 'Janeiro';
            return text;
        case 1:
            text = 'Fevereiro';
            return text;
        case 2:
            text = 'Março';
            return text;
        case 3:
            text = 'Abril';
            return text;
        case 4:
            text = 'Maio';
            return text;
        case 5:
            text = 'Junho';
            return text;
        case 6:
            text = 'Julho';
            return text;
        case 7:
            text = 'Agosto';
            return text;
        case 8:
            text = 'Setembro';
            return text;
        case 9:
            text = 'Outubro';
            return text;
        case 10:
            text = 'Novembro';
            return text;
        case 11:
            text = 'Dezembro';
            return text;
        default:
            return text = `Erro`;
    }
}

function zeroToLeft(num) {
    return num >= 10 ? num : `0${num}`;
}

function createData(data) {

    let dayOfTheWeekText = data.getDay();
    let text = textWeek(dayOfTheWeekText);

    let daymonth = data.getDate();

    let month = data.getMonth();
    let monthText = textMonth(month)

    let year = data.getFullYear();

    let minutes = data.getMinutes();

    return (
        `${text}, ${daymonth} de ${monthText} de ${year} ` +
        `${zeroToLeft(data.getHours())}:${zeroToLeft(data.getMinutes())}`
    );
}

h1.innerHTML = createData(data);