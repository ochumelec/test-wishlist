<?php

namespace App\Http\Requests;

use App\Models\WishList;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class WishListUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['string', 'required', 'min:1', 'max:255'],
            'url' => ['string', 'required', 'min:1', 'max:500'],
            'wish_list_id' => ['string', 'required', 'min:1', 'max:500'],
//            'image' => [
//                'required',
//                File::image()
//            ]
//            'email' => ['email', 'max:255', Rule::unique(WishList::class)->ignore($this->user()->id)],
        ];
    }
}
