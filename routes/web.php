<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('/register', function () {
    return Inertia::render('register');
})->name('register');

Route::get('/login', function () {
    return Inertia::render('login');
})->name('login');




// Api Routes for Authentication
Route::post('/register', [AuthController::class, 'register']);
Route::post('/logins', [AuthController::class, 'login']);

// Protected Routes
Route::middleware('auth')->group(function () {

});
