<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['user_id', 'title', 'company', 'description'])]
class Offer extends Model
{
   public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    public function analyses()
    {
    return $this->hasMany(Analysis::class);
    }
}
