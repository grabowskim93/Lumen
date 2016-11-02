<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

final class Calendar extends Model
{
    public $table = "calendar";

    protected $fillable = ['date', 'type'];
    public $timestamps = false;

    public function tasks()
    {
        return $this->hasMany('App\Models\Task');
    }
}
