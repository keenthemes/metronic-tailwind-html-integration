@extends('layouts.base')

@section('main')
    <div class="flex grow">
        @include('layouts.sidebar')
        <div class="wrapper flex grow flex-col">
            @include('layouts.header')
            <main class="grow content pt-5" id="content" role="content">
                <!-- begin: container -->
                <div class="container-fixed" id="content_container">
                </div>
                <!-- end: container -->
                <!-- begin: container -->
                <div class="container-fixed">
                    @yield('content')
                </div>
                <!-- end: container -->
            </main>
            @include('layouts.footer')
        </div>
    </div>
@endsection
