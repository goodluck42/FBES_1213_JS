npm install -g less
npm install -g typescript
npm install -g esbuild

# Если в академии, то флаг -g добавлять не нужно;
# При выполнении всех команд ниже, предполагается, что вы находитесь в корневой директории проекта;
# При клонировании проекта необходимо запустить след. команду:

npm install

# Она сразу установит все package'ы из файла package.json (кроме тех, что ранее были установлены с флагом -g);

# jQuery и типизация для TypeScript
npm install jquery
npm install @types/jquery

# Куки
npm install js-cookie
npm install @types/js-cookie

# Настойка для file watcher в WebStorm для LESS для output директории;

$FileName$ ../../wwwroot/$FileNameWithoutExtension$.css --source-map

# Если нет WebStorm, то можно установить следущий package через npm;

npm install less-watch-compiler

# Затем добавить конфиг файл с названием less-watch-compiler.config.json в корневую директорию проекта;

{
    "watchFolder": "./src/less",
    "outputFolder": "./wwwroot",
    "mainFile": "main.less"
}

# Затем осуществить запуск выполнив след. команду

less-watch-compiler

# Также при необходимости в VS Code можно настроить таски, чтобы less-watch-compiler не был единственным выполняемым таском;
# Для остановки watcher'ов достаточно нажать CTRL + C и затем Y;