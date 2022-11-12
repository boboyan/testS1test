<template>
  <div>
  <div class="List">
    <div class="row justify-content-center">
        <div class="col-md-8">
          <br><br>
            <h3 class="text-center">View Puppies&#128054;</h3>
          <br><br>
              <table class="table align-middle">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th class="d-none d-sm-table-cell">Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="dog in Dogs" :key="dog.key">
                        <td>{{ dog.name }}</td>
                        <td class="d-none d-sm-table-cell">{{ dog.description }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: dog.key }}" class="btn btn-primary btn-                                sm px-3">
                              Edit
                            </router-link>
                            <button @click.prevent="deleteDog(dog.key)" class="btn btn-danger btn-                                  sm px-3">
                              Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import db from '../firebaseDb'

export default {
  data() {
    return {
      Dogs: [],
      }
  },
  created () {
      db.collection('dogs').onSnapshot((snapshotChange) => {
        this.Dogs = []
        snapshotChange.forEach((doc) => {
          this.Dogs.push({
            key: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            kind: doc.data().kind
          })
        })
    })
  },
  methods: {
    deleteDog(id) {
      if (window.confirm('Do you really want to delete?')) {
        db.collection('dogs').doc(id).delete().then(() => {
          console.log('Record deleted!')
        })
            .catch((error) => {
              console.error(error)
            })
      }
    }
  }
}
</script>

<style>
.table thead {
  background-color: skyblue;
  color: ghostwhite;
}

.table td,.table th {
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
  text-align:center;
}

.btn {
  padding-top: 2px;
  padding-bottom: 2px;
  padding-right: 5px;
  padding-left: 5px;
  margin: 2px;
}
</style>
