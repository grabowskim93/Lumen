<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

final class Task extends Model
{
    public $table = "task";
    protected $fillable = ['name', 'completed', 'calendar_id'];
    public $timestamps = false;

}
