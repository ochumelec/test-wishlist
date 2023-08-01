<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WishListController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

Route::get('/dashboard/create_wishlist', function () {
    return Inertia::render('WishList/Create');
})->middleware(['auth'])->name('create_wish_list');

//Route::get('/wishlist/{url}', function () {
//    return Inertia::render('WishListView', ['url' => '{url}']);
//    Route::get('/wishlist/{url}', [WishListController::class, 'view'])->name('wishlist.view');
//})->name('wishlist.view');


Route::get('/wishlist/{url}', [WishListController::class, 'view'])->name('wishlist.view');

Route::middleware('auth')->group(function () {
    Route::get('/wishlist/edit/{url}', [WishListController::class, 'edit'])->name('wishlist.edit');

    Route::get('/wishlist/wish/reserve/{id}', [WishListController::class, 'reserve'])->name('wishlist.reserve');

    Route::post('/wishlist', [WishListController::class, 'create'])->name('wishlist.create');
    Route::post('/wishlist/save', [WishListController::class, 'update'])->name('wishlist.update');
    Route::delete('/wishlist', [WishListController::class, 'destroy'])->name('wishlist.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
