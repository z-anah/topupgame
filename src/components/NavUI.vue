<template>
    <nav id="topnav" class="defaultscroll is-sticky bg-white dark:bg-slate-900">
        <div class="container">
            <!-- Logo container-->
            <!-- <a class="logo pl-0" href="index.html">
                <img src="assets/images/logo-dark.png" class="inline-block dark:hidden" alt="">
                <img src="assets/images/logo-light.png" class="hidden dark:inline-block" alt="">
            </a> -->

            <!-- End Logo container-->
            <div class="menu-extras">
                <div class="menu-item">
                    <!-- Mobile menu toggle-->
                    <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                        <div class="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                    <!-- End mobile menu toggle-->
                </div>
            </div>

            <div id="navigation">
                <!-- Navigation Menu-->
                <ul class="navigation-menu">
                    <li><a href="#produk" class="sub-menu-item">Produk</a></li>
                </ul><!--end navigation menu-->
            </div><!--end navigation-->
        </div><!--end container-->
    </nav><!--end header-->
</template>
<script>
export default {
    name: 'NavUI'
}
</script>