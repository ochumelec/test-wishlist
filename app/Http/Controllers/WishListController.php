<?php

namespace App\Http\Controllers;

use App\Http\Requests\WishListUpdateRequest;
use App\Models\Gifts;
use App\Models\User;
use App\Models\WishList;
use App\Http\Requests\WishListCreateRequest;
use Hashids\Hashids;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class WishListController extends Controller
{
    //

    /**
     * Update the user's profile information.
     */
    public function create(WishListCreateRequest $request): RedirectResponse
    {
        $hashids = new Hashids();
        $url = $hashids->encode(mt_rand(111111, 999999));

        $wishlist = new WishList([
            'name' => $request->validated()['name'],
            'date_end_at' => $request->validated()['date'],
            'owner_id' => $request->user()->id,
            'url' => $url
        ]);
        $wishlist->save();

        return Redirect::route('dashboard');
    }

    public function view($url)
    {
        $wish_list = WishList::where('url', $url)->first();

        if (!$wish_list) {
            abort(404, 'Wish list not found');
        }

        $user = User::find($wish_list->owner_id);

        $gifts = Gifts::where('wish_list_id', $wish_list->id)->get();

        return Inertia::render('WishList/View', [
            'wish_list' => $wish_list,
            'url' => $url,
            'gifts' => $gifts,
            'user' => $user
        ]);
    }

    public function edit($url)
    {
        $wish_list = WishList::where('url', $url)->first();

        if (!$wish_list) {
            abort(404, 'Wish list not found');
        }

        return Inertia::render('WishList/Edit', [
            'wish_list' => $wish_list,
            'url' => $url
        ]);
    }

    public function update(WishListUpdateRequest $request)
    {
        $wish_list_id = $request->validated()['wish_list_id'];

        $wish_list = WishList::where('id', $wish_list_id)->first();

        if (!$wish_list) {
            abort(404, 'Wish list not found');
        }

        $gift = new Gifts([
            'title' => $request->validated()['name'],
            'reserve_user_id' => 0,
            'url' => $request->validated()['url'],
            'wish_list_id' => $wish_list_id
        ]);
        $gift->save();

        return Redirect::route('wishlist.view', ['url' => $wish_list->url]);

        return Inertia::render('WishList/Edit', [
            'wish_list' => $wish_list,
        ]);
    }

    public function reserve($id, FormRequest $request)
    {
        $gift = Gifts::find($id);

        $reserve_user_id = $request->user()->id;

        $gift->reserve_user_id = $reserve_user_id;
        $gift->save();

    }
}
