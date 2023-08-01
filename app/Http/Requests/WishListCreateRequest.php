<?php

namespace App\Http\Requests;

use App\Models\WishList;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class WishListCreateRequest extends FormRequest
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
            'date' => ['date', 'required'],
//            'image' => [
//                'required',
//                File::image()
//            ]
//            'email' => ['email', 'max:255', Rule::unique(WishList::class)->ignore($this->user()->id)],
        ];
    }
}
