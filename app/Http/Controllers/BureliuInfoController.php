<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class BureliuInfoController extends Controller
{
    /**
     * Show a list of all of the application's users.
     *
     * @return Response
     */
    public function bureliai()
    {
        $bureliai = DB::table('bureliu_info')->get();

        return $bureliai;
    }
}
