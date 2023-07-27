<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WishList extends Model
{
    use HasFactory;

    protected $table = 'wish_list';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'owner_id',
        'date_end_at',
        'url'
    ];

    public function gifts()
    {
        return $this->belongsToMany('App\GiftsModel', 'wish_list_gifts', 'wish_list_id', 'gift_id');
    }

    public function images()
    {
        return $this->hasOne('App\ImagesModel', 'object_id', 'id');
    }
}
