'use strict';

// let box = document.getElementById('box'),
//     btn = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     heart = document.querySelectorAll('.heart'),
//     oneHeart = document.querySelector('.heart'),
//     wrapper = document.querySelector('.wrapper');


// // console.log(box);
// // console.log(btn);
// // console.log(btn[0]);
// // console.log(circle[2]);
// // console.log(heart);
// // console.log(oneHeart);



// box.style.backgroundColor = 'blue';
// btn[1].style.borderRadius = '100%';

// circle[0].style.backgroundColor = 'red';
// circle[1].style.backgroundColor = 'yellow';
// circle[2].style.backgroundColor = 'green';


// // for (let i = 0; i < heart.length; i++) 
// // {
// //    heart[i].style.backgroundColor = 'blue';
// // }

// // heart.forEach(function(item, i, hearts)
// // {
// //     item.style.backgroundColor = 'blue';
// // });

// let div = document.createElement('div'),
// text = document.createTextNode('fort bayard');

// div.classList.add('black');
// // document.body.appendChild(div);
// // console.log(div);

// // wrapper.appendChild(div);
// // div.innerHTML = 'Hello World';

// div.textContent = 'Hello World';



// document.body.insertBefore(div, circle[0]);
// document.body.removeChild(circle[1]);
// wrapper.removeChild(heart[1]);
// document.body.replaceChild(btn[1], circle[1]);




let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionsalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

 
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('choose-persent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('month-value'),
    dayValue = document.querySelector('day-value');








let money,time;

function start() {
    money = +prompt("Твой бюджет на месац", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Твой бюджет на месац", '');
    }
}
start();

    let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving:true,
    chooseExpenses: function ()
    {
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
                  i = i - 1;
                }      
        }
    },
    detectDayBudget: function () 
    {
        appData.moneyPerDay = (appData.budget /30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function ()
    {
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
    },
    checkSaving: function () 
    {
        if (appData.saving == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
                appData.mouthIncome = save/100/12*percent;
                alert("Доход в месяц с вашего депозита: " + appData.mouthIncome);
    
        }
    },
    chooseOptExpenses: function () 
    {
        for (let i = 0; i < 3; i++) {
          let opt = prompt("Статья необязательных расходов?", "");
          appData.optionalExpenses[i] = opt;        
        }
    },
    chooseincome: function ()
    {
        let items ;

        while (isNaN(money) || money == "" || money == null)
        {
              items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        }
       
        appData.income = items.split(', ');
        appData.income.push(prompt('Что может еще?'));
        appData.income.sort();
    }
    };








//         a3 = promt("Введите обязательную статью расходов в этом месяце", ''),
//         a4 = promt("Во сколько обойдется?", '');

// appData.expenses.a1 = a2;
// appData.expenses.a3 = a4;

