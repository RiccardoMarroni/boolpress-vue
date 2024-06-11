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
        nextPage(nextPageUrl) {
            this.callApi(nextPageUrl);
        },
        prevPage(prevPageUrl) {
            this.callApi(prevPageUrl);
        },
    },
    mounted() {
        let url = this.store.base_url + this.store.projects_api_url;
        this.callApi(url);
    }
}
</script>




