<template>
    <div class="">
        <div class="tab__header">
            <button class="accordtitle" @click.prevent="active = !active">
                <span class="title"> {{ title }} </span>
                <span class="arrow" v-show="!active">&#9660;</span>
                <span class="arrow" v-show="active">&#9650;</span>
            </button>
        </div>
        <div v-show="active"><slot /></div>            
    </div>

</template>

<script>
export default {
    name: "Accordion",
    props: [
        'title'
    ],
    data() {
        return {
            active: false,
        }
    }
}

</script>

<style scoped>
.accordtitle
{
    text-transform: capitalize;
    background-color:#333;
    color:white;

    padding: .5rem 1rem;
    width: 100%;
    border: 0;

}

.accordtitle:hover
{
    background-color: #999;
}

.title
{
    float:left;
}

.arrow
{
    float: right;
}
</style>

