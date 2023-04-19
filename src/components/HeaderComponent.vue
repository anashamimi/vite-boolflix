<template>
    <header>
        <nav class="navbar">
            <div class="container-fluid">
                <h2>Boolflix</h2>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Cerca un film">
                    <button type="button" class="btn btn-outline-light">Cerca</button>
                </form>
            </div>
        </nav>
    </header>
</template>

<script>
import { store } from '../data/store';
    export default {
        name: 'HeaderComponent', 
        data() {
            return {
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    nav{
        background-color: rgba(0,0,0,0.5);
        color: red;
    }
</style>