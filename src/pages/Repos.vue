<template>
    <v-container>
        <v-card
            flat
            class="mb-5"
        >
            <v-layout
                row
                child-flex
                wrap
            >
                <div>
                    <v-toolbar>
                        <v-toolbar-title>Repositories of {{ user.name }}</v-toolbar-title>
                    </v-toolbar>
                </div>
            </v-layout>
        </v-card>
        <v-layout
            column
            wrap
            style="justify-content: center"
        >
            <v-flex
                v-for="(repo, index) of repos"
                :key="index"
                class="mb-3"
                style="flex: 0 0 auto">
                <v-card>
                    <v-card-title primary-title>
                        <div style="text-align: left">
                            <div class="headline">{{ repo.name }}</div>
                            <span class="grey--text">Repo name</span>
                        </div>
                        <v-spacer></v-spacer>
                        <router-link
                            :to="'/user/' + githubName + '/repos/' + repo.name"
                            style="text-decoration: none"
                        >
                            <v-btn color="warning" depressed="">Show commits</v-btn>
                        </router-link>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                user: [],
                repos: [],
                githubName: this.$router.currentRoute.params['id']
            }
        },
        methods: {
            getRepos() {
                fetch(`https://api.github.com/users/${this.githubName}`)
                    .then(response => response.json())
                    .then(data => {
                        this.user = data;

                        fetch(this.user.repos_url)
                            .then(response => response.json())
                            .then(data => {
                                this.repos = data;
                            })
                    })
            }
        },
        created() {
            this.getRepos();
        }
    }
</script>