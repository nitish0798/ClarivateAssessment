
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>



<template>
  <div style="margin-bottom: auto;">
    <button @click="fetchUsers">Fetch Users list info</button>
    <ul v-if="users.length > 0">
      <li v-for="user in users" :key="user.id">
        <div>ID: {{ user.id }}</div>
        <div>Name: {{ user.firstName }} {{ user.lastName }}</div>
        <div>Email: {{ user.email }}</div>
      </li>
    </ul>
    <div v-else>
      No users found.
    </div>
  </div>

  <div id="app">
  <form v-on:submit.prevent="addItem">
    <h1>Save new Users</h1>
    <p>
      First Name:
      <input type="text" required placeholder="First Name" v-model="firstName">
    </p>
    <p>
      Last Name:
      <input type="text" required placeholder="Last Name" v-model="lastName">
    </p>
    <p>
      Email:
      <input type="text" required placeholder="Email" v-model="email">
    </p>
    <p>
      Password:
      <input type="text" required placeholder="Password" v-model="password">
    </p>
    
    <button type="submit">Add item</button>
  </form>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserList',
  data() {
    return {
      users: []
    };
  },
  methods: {
    fetchUsers() {
      axios.get('http://localhost:3000/api/userList')
        .then(response => {
          this.users = response.data; // Assuming response.data is an array of user objects
        })
        .catch(error => {
          console.error('Error fetching users:', error);
        });
    },
    addItem() {
      let item = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      };

      axios.post('http://localhost:3000/api/saveUser', item)
        .then(response => {
          alert('User saved successfully:', response.data);
        })
        .catch(error => {
          alert('Error saving user:', error);
        });
    }

  }
};
</script>

