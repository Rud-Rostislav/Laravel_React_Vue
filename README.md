Install:
composer create-project laravel/laravel laravel_react
composer require laravel/breeze --dev
php artisan breeze:install react
php artisan migrate

Run:
php artisan serve
npm run dev

Модель, міграція та контролер:
php artisan make:model -mrc Post