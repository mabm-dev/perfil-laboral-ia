<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['user_id', 'original_name', 'path', 'extracted_text'])]
class Cv extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
