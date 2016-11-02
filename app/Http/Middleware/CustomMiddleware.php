<?php

namespace App\Http\Middleware;

use Closure;

class MiddlewareTest
{
    public function handle($request, Closure $next, $guard = null)
    {
        $request .= " Middleware";

        return $next($request);
    }
}
