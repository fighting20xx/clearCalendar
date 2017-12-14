<%--  Created by IntelliJ IDEA.
  User: seven.li
  Date: 2017/8/25
  Time: 16:52 
  Emali: fighting20xx@126.com   --%>    

<template>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" ><router-link to="/app" ><img id="logo"  src="../static/images/logo2.png"><span id="logoName">坤源</span></router-link></a>
            </div>


            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <!--<li class="active"><a href="#">Home</a></li>-->
                    <!--<li><a href="#about">About</a></li>-->
                    <!--<li><a href="#contact">Contact</a></li>-->
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li class="dropdown-header">Nav header</li>
                            <li><a href="#">Separated link</a></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li class="dropdown-header">Nav header</li>
                            <li><a href="#">Separated link</a></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                    </li>
                    <!--<li><a href="../navbar/">Default</a></li>-->
                    <!--<li><a href="../navbar-static-top/">Static top</a></li>-->
                    <li class="active"><a href="./">Fixed top <span class="sr-only">(current)</span></a></li>
                    <li><a ><router-link to="/" >退出系统</router-link></a></li>
                </ul>
            </div><!--/.nav-collapse -->
        </div>
    </nav>
</template>
<script>


</script>
<style>
    #pageTop{
        /*height: 55px;*/
        /*background-color:#1c2b36;*/
        /*background-color:rgba(28,43,54,0.96);*/
    }

    img#logo {
        width: 160px ;
        margin-right: -70px ;
        margin-left: 20px;
        margin-top: -8px;
    }
    #logoName {
        color: #00A85C;
    }

    /*!* navbar *!*/
    /*.navbar-default {*/
        /*background-color: #F8F8F8;*/
        /*border-color: #E7E7E7;*/
    /*}*/
    /*!* title *!*/
    /*.navbar-default .navbar-brand {*/
        /*color: #777;*/
    /*}*/
    /*.navbar-default .navbar-brand:hover,*/
    /*.navbar-default .navbar-brand:focus {*/
        /*color: #5E5E5E;*/
    /*}*/
    /*!* link *!*/
    /*.navbar-default .navbar-nav > li > a {*/
        /*color: #777;*/
    /*}*/
    /*.navbar-default .navbar-nav > li > a:hover,*/
    /*.navbar-default .navbar-nav > li > a:focus {*/
        /*color: #333;*/
    /*}*/
    /*.navbar-default .navbar-nav > .active > a,*/
    /*.navbar-default .navbar-nav > .active > a:hover,*/
    /*.navbar-default .navbar-nav > .active > a:focus {*/
        /*color: #555;*/
        /*background-color: #E7E7E7;*/
    /*}*/
    /*.navbar-default .navbar-nav > .open > a,*/
    /*.navbar-default .navbar-nav > .open > a:hover,*/
    /*.navbar-default .navbar-nav > .open > a:focus {*/
        /*color: #555;*/
        /*background-color: #D5D5D5;*/
    /*}*/
    /*!* caret *!*/
    /*.navbar-default .navbar-nav > .dropdown > a .caret {*/
        /*border-top-color: #777;*/
        /*border-bottom-color: #777;*/
    /*}*/
    /*.navbar-default .navbar-nav > .dropdown > a:hover .caret,*/
    /*.navbar-default .navbar-nav > .dropdown > a:focus .caret {*/
        /*border-top-color: #333;*/
        /*border-bottom-color: #333;*/
    /*}*/
    /*.navbar-default .navbar-nav > .open > a .caret,*/
    /*.navbar-default .navbar-nav > .open > a:hover .caret,*/
    /*.navbar-default .navbar-nav > .open > a:focus .caret {*/
        /*border-top-color: #555;*/
        /*border-bottom-color: #555;*/
    /*}*/
    /*!* mobile version *!*/
    /*.navbar-default .navbar-toggle {*/
        /*border-color: #DDD;*/
    /*}*/
    /*.navbar-default .navbar-toggle:hover,*/
    /*.navbar-default .navbar-toggle:focus {*/
        /*background-color: #DDD;*/
    /*}*/
    /*.navbar-default .navbar-toggle .icon-bar {*/
        /*background-color: #CCC;*/
    /*}*/
    /*@media (max-width: 767px) {*/
        /*.navbar-default .navbar-nav .open .dropdown-menu > li > a {*/
            /*color: #777;*/
        /*}*/
        /*.navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,*/
        /*.navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {*/
            /*color: #333;*/
        /*}*/
    /*}*/

</style>