<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gifts extends Model
{
    use HasFactory;

    protected $table = 'gifts';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'wish_list_id',
        'reserve_user_id',
        'url'
    ];

    public function wishLists()
    {
//        return $this->belongsToMany(EventsModel::class);
        return $this->belongsToMany('App\WishList', 'wish_list_gifts', 'gift_id', 'wish_list_id');
    }
}
