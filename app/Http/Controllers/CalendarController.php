<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use App\Models\Task;
use Illuminate\Http\Request;

class CalendarController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     *
     */
    public function create(Request $request)
    {
        $calendar = Calendar::create($request->all());

        $task = array();
        $taskName['tasks'] = array();

        foreach ($request->input('name') as $key => $value) {
            array_push($task, new Task(array('name' => $value)));
        }

        $calendar->tasks()->saveMany($task);

        $task = Task::where('calendar_id', $calendar->id)->get()->toArray();
        foreach ($task as $key => $value) {
            array_push($taskName['tasks'], $task[$key]);
        }

        $calendar = $calendar->toArray();
        $data = array_merge($calendar, $taskName);

        return response()->json($data);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getByDate(Request $request)
    {
        $calendars = Calendar::whereBetween('date', [$request->input('from'), $request->input('to')])
                    ->orderBy('date', 'asc')
                    ->get();
        foreach ($calendars as $key => $value) {
            $task = Calendar::find($value->id)->tasks()->get()->toArray();
            $value['tasks'] = $task;
        }

        return response()->json($calendars);
    }

    /**
     * @param Request $request
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function completeTask(Request $request, $id)
    {
        $task = Task::find($id);
        $task->completed = 1;
        $task->save();
        return response()->json($task);

    }
}
