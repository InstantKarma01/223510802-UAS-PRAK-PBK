<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="@/assets/reshot-icon-weather-8CKJB9YN7X.svg">
          </q-avatar>
          Project Weather
        </q-toolbar-title>
        <q-tabs align="left">
        <q-route-tab to="/weather" label="Wheater" />
      </q-tabs>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
      
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-scroll-area class="fit">
        <div class="drawer-header">
          <q-item>
            <q-item-section avatar>
              <q-avatar size="64px">
                <img src="@/assets/bird.jpg">
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                Instant_Karma
              </q-item-label>
              <q-item-label caption>
                @instant_karma31
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <q-list>
          <q-item>
            <q-item-section>
              <div class="q-pa-md">
                <q-btn-dropdown color="blue" label="Daftar Tugas Selesai" dropdown-icon="change_history">
                  <q-list>
                    <q-item clickable v-close-popup @click="onItemClick('https://sirhan-pertemuan5.vercel.app/')">
                      <q-item-section>
                        <q-item-label>TUGAS 5</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup @click="onItemClick('https://223510802-tugas6.vercel.app/')">
                      <q-item-section>
                        <q-item-label>TUGAS 6</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup @click="onItemClick('https://todo-app-green-theta.vercel.app/')">
                      <q-item-section>
                        <q-item-label>TUGAS 7</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const rightDrawerOpen = ref(false)

    return {
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
      onItemClick (url) {
        window.open(url, '_blank')
      }
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.drawer-header {
  background: url('@/assets/wd.jpg') no-repeat center center;
  background-size: cover;
  padding: 16px;
  color: white;
}

.q-item-label {
  color: white;
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
