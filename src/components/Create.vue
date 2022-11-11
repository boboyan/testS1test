<template>
  <div>
    <div class="row justify-content-center">
        <div class="col-md-5">
          <br><br>
            <h3 class="text-center">Add Puppies&#10133;</h3>
          <br><br>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="dog.name" required>
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="dog.description" required>
                </div>



                <div class="form-group">
                  <label>Dog Size</label>
                        <select id='size' class="form-control" v-model="dog.size" required>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='big'>Big</option>

                        </select>
                </div>

                <div class="form-group">
                  <br><br>
                    <button class="btn btn-primary btn-block" @click="addDogs">
                       Add Dogs
                    </button>
                </div>
            </form>
        </div>
      </div>
    </div>
</template>

<script>
import db from '../firebaseDb'

export default {
  name: 'Create',
  data () {
    return {
      dog: {},
    }
  },
  methods: {
    addDogs() {
      if (this.dog.name.length !== 0 && this.dog.description.length !== 0) {
        db.collection('dogs').add(this.dog).then(() => {
          alert('Dogs successfully created!');
          this.dog.name = ''
          this.dog.description = ''
          this.dog.size = ''
        })
        this.error = true;
        this.errorMsg = "Please fill out the title and description"
        setTimeout(() => {
          this.error = false;
        }, 5000)
      }
    }
  }
}
</script>