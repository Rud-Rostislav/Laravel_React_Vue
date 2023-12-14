Prepare:
composer create-project laravel/laravel laravel_react
composer require laravel/breeze --dev
php artisan breeze:install react
php artisan migrate

Run:
php artisan serve
npm run dev

Create Model, migration, controller in a single command:
php artisan make:model -mrc Post

Create fake posts by using factory:
php artisan make:factory PostFactory
php artisan migrate:fresh --seed