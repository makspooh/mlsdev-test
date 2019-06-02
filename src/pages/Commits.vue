<template>
    <v-container>
    <v-card flat class="mb-5">
            <v-layout row child-flex wrap>
                <div>
                <v-toolbar>
                    <v-toolbar-title>Commits of {{ repoName }}</v-toolbar-title>
                </v-toolbar>
                </div>
            </v-layout>
        </v-card>
        <v-data-table
            :items="commits"
            class="elevation-1"
            hide-actions
            hide-headers
        >
            <template v-slot:items="props">
                <td>{{ props.item.commit.message }}</td>
                <td>{{ getDate(props.item.commit.author.date) }}</td>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            repoName: this.$router.currentRoute.params['repo'],
            userName: this.$router.currentRoute.params['id'],
            commits: [],
            date: []
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
