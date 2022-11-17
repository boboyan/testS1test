<template>
  <div class="app">
    <br><br>
    <header>
        <nav class="navbar justify-content-between flex-nowrap flex-row">
          <div class="container">

            <h1>Puppy Potty Training Guide🐾</h1>

<br><br>
                  <router-link  to="/">Home</router-link>

                  <router-link  to="/create">Add Puppies</router-link>

                  <router-link  to="/List">View Puppies</router-link>


                  <router-link  to="/Tips">Tips</router-link>



          </div>
        </nav>
    </header>
  <main>
    <router-view class="modify"></router-view>
  </main>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', san-serif;

  &::selection {
    background: transparentize(#42B883, 0.5);
  }
}

body {
  background-color: papayawhip;
}


a {
  text-decoration: none;
}

header {
  display: flex;
  justify-content: center;
  padding: 10px 16px;
  background-color: sandybrown;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);

  h1 {
    color:ghostwhite;
    font-size: 28px;
    font-weight: bolder;
    font-kerning: normal;
    font-style: normal;


    span {
      color:darkslategrey;
    }
  }
}

h3 {
  padding-top: 10px;

}

.modify {
  padding: 10px;
}

</style>
