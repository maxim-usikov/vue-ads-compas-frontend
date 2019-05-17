# Laravel & VueJS Хранилище книг
Одна книга может иметь несколько авторов. Один автор может относиться к
нескольким книгам. Создание тестовых авторов/книг можно сделать в seeders, т.е.
не реализовывать роуты.  Искать книги может только авторизованый пользователь.
Список книг доступен для всех. Backend API на Laravel.
Routes:
- аутентификация
- получение списка книг (пагинация, множественный фильтр по автору и названию)
- поиск книги (<=10 подходящих) по автору/названию, строка поиска от 3 символов
- Frontend Использовать NuxtJS, Vuetify Страницы для поиска книг и для вывода
  списка книг с фильтрацией

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
