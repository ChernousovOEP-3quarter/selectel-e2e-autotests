# Автотесты к E2E-тестированию на Playwright для главной страницы сайта Selectel

## Реализованные проверки:
1) Проверка отображения основных разделов меню;
2) Поиск по сайту;
3) Переключение языка на английский;
4) Переход в документацию;
5) Переход в кейсы.

## Инструменты:
Используется язык TypeScript, фреймворк для проведения браузерных E2E-тестов Playwright и его стандартная система генерации отчётов.

## Инструкция:
Склонируйте проект автотестов с репозитория:
```bash
git clone https://github.com/ChernousovOEP-3quarter/selectel-e2e-autotests.git
```

I. Установите nvm:
1. MacOS/Linux https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating
2. Windows (через cmd.exe, павершеллом не пользуемся): https://github.com/coreybutler/nvm-windows

II. Рекомендуется выбрать Node.js версии 22 для избежания проблем совместимости:
```bash
nvm install 22
nvm use 22
```
Проверить установленные версии можно выполнив в консоли:
```bash
node -v
npm -v
```

III. Установка и запуск:
1. Перейдите в папку проекта:
```bash
cd selectel-e2e-autotests
```

2. Установите зависимости:
```bash
npm install
```

3. Установите браузеры Playwright:
```bash
npx playwright install
```

4. Запуск тестов в обычном режиме:
```bash
npx playwright test
```
5. Запуск тестов в графическом режиме:
```bash
npx playwright test --ui
```

6. Посмотреть отчёт после тестов:
```bash
npx playwright show-report
```