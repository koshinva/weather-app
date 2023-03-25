<h1 style="text-align: center">Weather App</h1>

---

## Описание проекта

Приложение, в котором можно узнать погоду в любом городе на данный момент и на 5 следующих дней.

<img src="./src/assets/image/readme/screen-1.png" alt="screen 1 project" style="width:300px;">
<img src="./src/assets/image/readme/screen-2.png" alt="screen 1 project" style="width:300px;">

## Используемые технологии

<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/></a><a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/></a> <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> 

## Функциональность

* 2 страницы - первая отображает погодн на данный момент и следующие 12 часов. Вторая - отображает погоду на следующие 5 дней.
* при вводе текста в поиск выпадает список подходящих городов (происходит запрос на Open Api - `http://api.openweathermap.org/geo/1.0/direct`, частота запросов при введении оптимизирована с помощью хука useDebounce)
* после выбора города и нажатия кнопки поиск отправляется запрос на `https://api.openweathermap.org/data/2.5/forecast`
* отправка запросов происходит с помощью библиотеки `axios`
* при работе используется state - менеджер `Redux Toolkit`
* имеется возможность сменить тему приложения. По умолчанию стоит ночная тема.
* адаптивная вёрстка

## Установка

1. Клонировать репозиторий
`git clone https://github.com/koshinva/weather-app.git`

2. Установить зависимости
`npm install`

3. Запустить локально на своей машине с помощью команды
`npm run start`

4. Перейти в браузер по ссылке  `http://localhost:3000/` 

## Ссылки

**Демо** версия проекта доступна по **[ссылке](https://koshinva.github.io/weather-app/ 'https://koshinva.github.io/weather-app/')**

📫 Задать вопрос по проекту 

<a href="https://t.me/imp_0593" target="_blank" rel="noreferrer"> <img src="https://img.shields.io/badge/Telegram-blue?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram"/> </a>