<template>
    <v-container grid-list-xl>
        <v-layout wrap style="justify-content: center">
            <v-flex
                v-for="(user, index) in users"
                :key="index"
                class="mb-5"
                style="flex: 0 0 auto"
            >
                <v-card width="250px" style="text-align: center">
                    <v-avatar
                    size="120"
                    class='mt-3'
                    >
                        <v-img
                        :src="user.avatar_url"
                        >
                        </v-img>
                    </v-avatar>

                    <v-card-title primary-title>
                        <div style="text-align: left">
                            <div class="headline">{{ user.login }}</div>
                            <span v-if="user.email != null" class="grey--text">{{ user.email }}</span>
                            <span v-else class="grey--text">Email not found</span>
                        </div>
                    </v-card-title>

                    <v-card-actions>
                        <router-link
                            :to="'/user/' + user.login"
                            style="text-decoration: none"
                        >
                            <v-btn flat color="purple">More info</v-btn>
                        </router-link>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        users() {
            return this.$store.state.users;
        }
    },
    created() {
        fetch('https://tanuhaua.github.io/datas-file-json/github_users.json')
            .then(response => response.json())
            .then(data => {
                data.forEach(user => {
                    fetch(`https://api.github.com/users/${user.githubName}`)
                        .then(response => response.json())
                        .then(data => {
                            this.users.push(data);
                        })
                });
            })
    }
}
</script>