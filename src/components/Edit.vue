<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-5">
                <h3 class="text-center">Update Dog Record</h3>
                <form @submit.prevent = "onUpdateForm">
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
                        <button class="btn btn-primary btn-block" @click="UpdateDogs">Update Dog Record</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import db from '../firebaseDb'
    export default {
        data() {
            return {
                dog: {},
            }
        },
        created() {
            let dbRef = db.collection('dogs').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                this.dog = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.collection('dogs').doc(this.$route.params.id)
                .update(this.dog).then(() => {
                    console.log("Dog record successfully updated!");
                    this.$router.push('/')
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>