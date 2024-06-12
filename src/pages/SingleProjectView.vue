<script>
import router from '../../router';
import { store } from '../../store';
import axios from 'axios';

export default {
    name: 'SingleProjectView',
    data() {
        return {
            store,
            project: {},
            callSuccess: null,
            loading: true
        }
    },
    methods: {
        callSingleApi(url) {
            axios.get(url).then(response => {
                this.project = response.data.project;
                this.callSuccess = response.data.success;
                this.loading = false;
                
                if (this.callSuccess == false) {
                    this.$router.push({ name: 'NotFound' })
                }
            })
                .catch(error => {
                    console.error(error);
                })
        },
    },
    mounted() {
        let single_project_url = store.base_url + store.projects_api_url + this.$route.params.slug;
        this.callSingleApi(single_project_url);
    }
}
</script>

<template></template>