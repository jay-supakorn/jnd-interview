<?php

namespace App\Http\Controllers;

use App\Models\Shorten;
use Illuminate\Http\Request;

class ShortenController extends Controller
{

    public function __construct()
    {
    }

    public function lists(Request $request)
    {
        $Shortens = Shorten::get();
        $Shortens->transform(function ($shorten) {
            return $this->mappingData($shorten);
        });
        $data['lists'] = $Shortens;
        $data['message'] = 'success';
        return response()->json($data, 200);
    }

    public function mappingData($shorten)
    {
        $row['link_original'] = $shorten->link_original;
        $row['link_shorten'] = config('app.url') . "/" . $shorten->link_shorten;
        $row['user'] = $shorten->user;
        return (object)$row;
    }
    public function actionLink(Request $request)
    {
        $user_id = auth()->user()->id ?? null;
        $shortenName = trim($request->shortenName);
        $data = array();
        $shortenLink = $this->createRandom();
        $Shorten = Shorten::create(['link_original' => $shortenName, 'link_shorten' => $shortenLink, 'user_id' => $user_id]);
        $data['link_original'] = $shortenName;
        $data['link_shorten'] = config('app.url') . "/" . $shortenLink;
        $data['message'] = 'success';
        return response()->json($data, 200);
    }

    private function createRandom()
    {
        $chars = "abcdefghijkmnopqrstuvwxyz023456789";
        srand((float) microtime() * 1000000);
        $i = 0;
        $pass = '';
        while ($i <= 7) {
            $num = rand() % 33;
            $tmp = substr($chars, $num, 1);
            $pass = $pass . $tmp;
            $i++;
        }
        return $pass;
    }
}
