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


const date = new Date();

let dayOfTheWeekText = date.getDay();
let text = textWeek(dayOfTheWeekText);

let daymonth = date.getDate();

let month = date.getMonth();
let monthText = textMonth(month)

let year = date.getFullYear();
let hours = date.getHours();


let minutes = date.getMinutes();

let dayWeekMonthYearsTime = `${text}, ${daymonth} de ${monthText} de ${year}
${hours}:${minutes}`;


const showTime = document.querySelector('h1');
showTime.innerHTML = dayWeekMonthYearsTime;











console.log(dayWeekMonthYearsTime);






