<template>
    <div>
        <nav>
            <router-link v-for="routes in links"
                v-bind:key="routes.id"
                :to="`${routes.page}`">{{routes.text}}</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data () {
        return {
            links: [
                {
                    id: 0,
                    text: 'Front',
                    page: '/'
                },
                {
                    id: 1,
                    text: 'Favorites',
                    page: '/'
                },
                {
                    id: 2,
                    text: 'About',
                    page: '/'
                }
            ]
        }
    }
}
</script>
<style>
    nav a {
        text-transform: uppercase;
        text-decoration: none;
        padding: 0.5rem;
        color: white;
        background-color: black;
        font-weight: bolder;
        
        
    }
    nav a:hover {
        background-color: lightslategray;
    }
    nav
    {
        background-color: black;
        padding: 0.5rem;
        margin: 0;
    }

</style>