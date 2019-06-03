<template>
    <v-container>
        <v-card
            flat
            class="mb-5"
        >
            <v-layout
                row
                child-flex
            >
                <div>
                    <v-toolbar>
                        <v-btn
                            @click="this.goBack"
                            icon class="hidden-xs-only"
                        >
                            <v-icon>arrow_back</v-icon>
                        </v-btn>
                        <v-toolbar-title>Commits of {{ repoName }}</v-toolbar-title>
                    </v-toolbar>
                </div>
            </v-layout>
        </v-card>
        <v-data-table
            v-if="this.commits.length > 0"
            :items="commits"
            class="elevation-1"
            hide-actions
            hide-headers
        >
            <template v-slot:items="props">
                <td>{{ props.item.commit.message }}</td>
                <v-spacer></v-spacer>
                <td>{{ getDate(props.item.commit.author.date) }}</td>
            </template>
        </v-data-table>
        <v-card v-else>
            <v-card-title>Repository is empty</v-card-title>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            repoName: this.$router.currentRoute.params['repo'],
            userName: this.$router.currentRoute.params['id'],
            commits: []
        }
    },
    methods: {
        getDate(date) {
            let newDate = new Date(date);
            let day = newDate.getDate();
            let month = newDate.getMonth();
            let year = newDate.getFullYear();

            if (day < 10) {
                day = '0' + day;
            }

            if (month < 10) {
                month = '0' + month;
            }

            return day + '.' + month + '.' + year;
        },
        goBack() {
            this.$router.go(-1);
        }
    },
    created() {
        fetch(`https://api.github.com/repos/${this.userName}/${this.repoName}/commits`)
            .then(response => response.json())
            .then(data => {
                this.commits = data;
            })
    }
}
</script>
