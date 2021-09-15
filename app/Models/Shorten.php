<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Shorten extends Model
{
    protected $table = "shortens";

    protected $fillable = [
        'link_original',
        'link_shorten',
        'user_id',
    ];
}
