<?php


use App\Http\Middleware\MiddlewareTest;
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->post('api/v1/calendar','CalendarController@create');
$app->get('api/v1/calendarByDate','CalendarController@getByDate');
$app->get('api/v1/task/{id}','CalendarController@completeTask');

