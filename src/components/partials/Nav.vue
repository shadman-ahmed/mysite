<template>
    <nav class="container">
        <div class="columns">
            <div class="column">
                <router-link to="/" exact class="brand">Shadman Ahmed</router-link>
            </div>
            <div class="column">
                <ul>
                    <li>
                        <router-link to="/" exact>Projects</router-link>
                    </li>
                    <li>
                        <router-link to="/about">About</router-link>
                    </li>
                    <li>
                        <router-link to="/contact">Contact</router-link>
                    </li>
                </ul>
            </div> 
        </div>
    </nav>
</template>

<style lang="scss" scoped>
$dark: #31465a;
$darker: #121a23;

nav {
    padding: 20px 0;
    font-size: 17px;
    margin-bottom: 60px;
}

.brand {
    color: $dark;
    font-weight: bold;
    border-bottom: 2px solid $dark;
}
.brand:hover {
    color: $darker;
}

a {
    color: #707a85;
}
a:hover {
    color: $darker;
}
.router-link-active {
    color: $darker;
}

ul li { 
    display: inline;
}
ul li::after {
    cursor: default;
    content: '\2022';
    color: #3273dc;
    padding: 0 15px;
}
ul li:last-child::after {
    content: '';
    padding: 0;
}

@media only screen and (min-width: 769px) {
    ul {
        float: right;
    }
}
</style>

