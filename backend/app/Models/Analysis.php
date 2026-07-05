<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['user_id', 'cv_id', 'offer_id', 'match_percentage', 'detected_skills', 'missing_skills', 'recommendations', 'status'])]
class Analysis extends Model
{
    protected function casts(): array
    {
        return [
            'detected_skills' => 'array',
            'missing_skills' => 'array',
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function cv()
    {
        return $this->belongsTo(Cv::class);
    }

    public function offer()
    {
        return $this->belongsTo(Offer::class);
    }
}
