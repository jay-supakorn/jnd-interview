<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{uri?}', function ($uri = null) {
    if (!in_array($uri, ['login', 'register', 'dashboard']) && $uri) {
        return $uri;
    } else {
        return view('welcome');
    }
})->where('uri', '(.*)');

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
