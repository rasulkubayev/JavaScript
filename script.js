'use strict';


let money = +prompt("Твой бюджет на месац", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving:false
    };

for (let i = 0; i < 2; i++) 
{
    let a = window.prompt("Введите обязательную статью зфсходов в этом месяце", ''),
        b = window.prompt("Во сколько обойдется?", '');



        if ((typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50)
        {
            console.log("done");
            appData.expenses[a] = b;
        }
        else
        {
            let a = window.prompt("Введите обязательную статью зфсходов в этом месяце", ''),
            b = window.prompt("Во сколько обойдется?", '');
        }      
}
appData.moneyPerDay = appData.budget /30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка")
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка")
}
else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка")
}
else{
    console.log("Произошла ошибка");
}




    //     a3 = promt("Введите обязательную статью расходов в этом месяце", ''),
    //     a4 = promt("Во сколько обойдется?", '');

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

alert(appData.budget / 30);