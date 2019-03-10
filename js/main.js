let startBtn = document.getElementById('start'), //начать расчет

    budgetValue = document.getElementsByClassName('budget-value')[0], //доход
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0], //буюджет на один день
    levelValue = document.getElementsByClassName('level-value')[0], //уровень дохода
    expensesValue = document.getElementsByClassName('expenses-value')[0], //обязательные расходы
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0], //возможные траты
    incomeValue = document.getElementsByClassName('income-value')[0], //дополнительный доход
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0], //накопления за один месяц
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0], //накопления за один год

    expensesItem = document.getElementsByClassName('expenses-item'), //обязательные расходы

    approve1 = document.getElementsByTagName('button')[0], //утвердить
    optionalExpensesBtn = document.getElementsByClassName('optionalexpenses-btn')[0], //утвердить
    calculate = document.getElementsByTagName('button')[2], //рассчитать

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'), //необязательные расходы

    incomeItem = document.querySelector('#income'), //статьи
    checkSavings = document.querySelector('#savings'), //чекбокс
    sumValue = document.querySelector('#sum'), //сумма
    percentValue = document.querySelector('#percent'), //процент
    yearValue = document.querySelector('.year-value'), //год
    monthValue = document.querySelector('.month-value'), //месяц
    dayValue = document.querySelector('.day-value'); //день

let money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    savings: false,
    income: [],
    moneyPerday: {}
};
   
startBtn.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD','');
    money = +prompt('Ваш бюджет на месяц?','');

    while (isNaN(money) || money == "" || money == null ) {
        money = +prompt('Ваш бюджет?','');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDay();
});

approve1.addEventListener('click', function() {
    let summ = 0;

        for (let i = 0;i < expensesItem.length; i++) {
        let price = expensesItem[i].value,
            cost = expensesItem[++i].value;
    
        if ( (typeof(price)) === 'string' && (typeof(price)) !=null && (typeof(cost) !=null
            && price !='' && cost !='' && price.length < 50)){
        console.log("Прошло все ок");
        appData.expenses[price] = cost;
        summ += + cost;
        } else{
            i--;
        }
    }
    expensesValue.textContent = summ;
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let chose = optionalExpensesItem[i].value;
        appData.optionalExpenses [i] = chose;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + '';
    }
});

startBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
    appData.moneyPerday = (appData.budget / 30).toFixed(2);
    dayBudgetValue.textContent = appData.moneyPerday;

        if (appData.moneyPerday < 1000) {
            levelValue.textContent = 'Низкий уровень достатка' ;
        } else if (appData.moneyPerday >1000 && appData.moneyPerday < 2000) {
            levelValue.textContent = 'Средний уровень достатка' ;
        } else if (appData.moneyPerday > 2000) {
            levelValue.textContent = 'Высокий уровень достатка' ;
        } else {
            levelValue.textContent = 'Ой, ошибочка!' ;
        }}
    else {dayBudgetValue.textContent = 'Произошла ошибка!';
    }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.incomeItem = items.split(', ');
    incomeValue.textContent = appData.incomeItem;
});

checkSavings.addEventListener ('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener ('input', function() {
    if (appData.savings == true) {
        let sum = sumValue.value,
            percent = percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.monthIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

persentValue.addEventListener ('input', function() {
    if (appData.savings == true) {
        let sum = sumValue.value,
            percent = percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.monthIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});