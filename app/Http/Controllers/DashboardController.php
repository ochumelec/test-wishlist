<?php

namespace App\Http\Controllers;

use App\Models\WishList;
use App\Http\Requests\WishListUpdateRequest;
use Hashids\Hashids;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class DashboardController extends Controller
{

    public function index(Request $request)
    {
        $wish_lists = WishList::where('owner_id', $request->user()->id)->get();

        return Inertia::render('Dashboard', [
            'wish_lists' => $wish_lists,
        ]);
    }
}
