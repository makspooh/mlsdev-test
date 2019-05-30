<template>
<v-container>
  <v-layout style="justify-content: center">
    <v-flex xs10 sm6>
      <v-card>
        <v-img :src="this.user.avatar_url" height="400px">
          <v-layout column fill-height>

            <v-spacer></v-spacer>

            <v-card-title class="white--text pt-5">
              <div class="display-1 pl-1 pt-5">{{ this.user.name }}</div>
            </v-card-title>
          </v-layout>
        </v-img>

        <v-list two-line>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">mail</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title v-if="this.user.email">{{ this.user.email }}</v-list-tile-title>
              <v-list-tile-title v-else>Email not found</v-list-tile-title>
              <v-list-tile-sub-title>Email</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">person</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ this.user.login }}</v-list-tile-title>
              <v-list-tile-sub-title>Login</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile>
            <v-list-tile-action>
              <v-icon color="indigo">settings_ethernet</v-icon>
            </v-list-tile-action>
            
            <v-select label="Repositories"></v-select>
          </v-list-tile>
        </v-list>
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
            login: this.$router.currentRoute.params['id']
        }
    },
    created() {
      fetch(`https://api.github.com/users/${this.login}`)
        .then(response => response.json())
        .then(data => {
          this.user = data;
        })
    }
}
</script>