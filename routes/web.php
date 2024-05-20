<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ShipController;
use App\Http\Controllers\TrackingController;
use App\Http\Controllers\BillingController;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\AccountsController;
use App\Http\Controllers\SupportController;
use App\Http\Controllers\ProvidersController;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/login', [AuthController::class, 'login'])->name('login');
Route::post('/login', [AuthController::class, 'authenticate']);
Route::get('/signup', [AuthController::class, 'signup'])->name('signup');
Route::post('/signup', [AuthController::class, 'register']);
Route::get('/onboarding', [AuthController::class, 'onboarding'])->name('onboarding');
Route::get('/onboarding-steps', [AuthController::class, 'onboardingsteps'])->name('onboarding-steps');
Route::get('/logout', [AuthController::class, 'logout'])->name('logout');

// Dashboard Routes
Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
Route::get('/profile', [ProfileController::class, 'index'])->name('profile');

// Ship Routes
Route::get('/ship', [ShipController::class, 'index'])->name('ship');

// Tracking Routes
Route::get('/track', [TrackingController::class, 'index'])->name('track');

// Billing Routes
Route::get('/billing', [BillingController::class, 'index'])->name('billing');

// Address Routes
Route::get('/address', [AddressController::class, 'index'])->name('address');

// Account Routes
Route::get('/account', [AccountsController::class, 'index'])->name('account');

Route::get('/support', [SupportController::class, 'index'])->name('support');

Route::post('/providers', [ProvidersController::class, 'index'])->name('providers');