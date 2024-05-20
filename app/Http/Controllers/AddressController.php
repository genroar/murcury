<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Intertia\Response;

class AddressController extends Controller
{
    public function index()
    {
        return Inertia::render('Address/Address');
    }
}
