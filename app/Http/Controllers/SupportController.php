<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Intertia\Response;

class SupportController extends Controller
{
    public function index()
    {
        return Inertia::render('Support/Support');
    }
}
