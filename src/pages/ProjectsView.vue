<template>
    <ul class="pagination">
        <li class="page-item">
            <a class="page-link" :class="{'disabled' : currentpage <=1}" href="#">previos</a>
        </li>
        <li class="page-item" v-for="page in totalpage" :key="page">
            <a class="page-link" :class="{ 'active' : currentpage == 1}" href="#">{{ page }}</a>
        </li>
        <li class="page-item">
            <a class="page-link" :class="{'disabled' : currentpage > 2}" href="#">next</a>
        </li>
    </ul>
</template>


<script>
import ProjectCard from '../Main/ProjectCard.vue';
import axios from 'axios';
import { store } from '../../store';

export default {
    name: 'ProjectsView',
    components: {
     ProjectCard
    },
    data() {
        return {
            store,
            projects: [],
            currentPage: null,
            totalPage: 0,
            loading: true
        }
    },
    methods: {
        callApi(url) {
            axios.get(url).then(response => {
                this.projects = response.data.projects;
                this.loading = false;
            })
                .catch(error => {
                    console.error(error);
                })
        },
    },
    mounted() {
        let url = this.store.base_url + this.store.projects_api_url;
        this.callApi(url);
    }
}
</script>




