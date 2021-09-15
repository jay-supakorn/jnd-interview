<?php

use App\Models\Shorten;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
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
        $shorten = Shorten::where('link_shorten', $uri)->first();
        if (strpos($shorten->link_original, 'http')) {
            $url = "http://$shorten->link_original";
        } else {
            if (strpos($shorten->link_original, 'https')) {
                $url = "https://$shorten->link_original";
            } else {
                $url = $shorten->link_original;
            }
        }
        return Redirect::to($url);
    } else {
        return view('welcome');
    }
})->where('uri', '(.*)');

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
