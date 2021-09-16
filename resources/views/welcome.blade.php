<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{{ config('app.name', 'Laravel') }}</title>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <script src="{{ asset('js/app.js') }}" defer></script>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <meta charset="UTF-8" />
    </head>
    <body style="background-color: #f5f5f5; ">
        <div class="max-w-2xl mx-auto bg-white shadow-md pb-12 items-center my-auto flex flex-col mt-12">
            <div class="w-full">
                <div id="app"></div>
            </div>
        </div>
    </body>
</html>
