<template>
    <q-page class="q-pa-md flex flex-center justify-center full-height">
      <q-card class="weather-card">
        <q-card-section>
          <div class="text-h6 text-center">Cuaca</div>
        </q-card-section>
  
        <q-card-section>
          <q-input v-model="city" label="Kota" filled />
          <q-btn label="Cari" @click="getWeather" color="primary" class="full-width q-mt-md" />
        </q-card-section>
  
        <q-card-section v-if="weather" class="weather-info text-center">
          <q-icon name="mdi-weather-cloudy" size="4em" class="q-my-md" />
          <div class="q-mb-md">
            <div class="text-h6 text-bold">{{ weather.name }}</div>
            <div class="text-red text-h5"><strong>{{ weather.main.temp }}°C</strong></div>
            <div class="text-subtitle1">{{ weather.weather[0].description }}</div>
            <div class="text-body1 q-my-sm"><strong>Humidity:</strong> {{ weather.main.humidity }}%</div>
            <div class="text-body1 q-my-sm"><strong>Wind Speed:</strong> {{ weather.wind.speed }} m/s</div>
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </template>
  
  <script>
  import axios from 'axios'
  import { ref } from 'vue'
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    setup() {
      const city = ref('')
      const weather = ref(null)
  
      const getWeather = async () => {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
              q: city.value,
              appid: '15fe39829676ebf9277e7ce804763c87', // Ganti dengan API key Anda
              units: 'metric'
            }
          })
          weather.value = response.data
        } catch (error) {
          console.error(error)
        }
      }
  
      return {
        city,
        weather,
        getWeather
      }
    }
  })
  </script>
  
  <style scoped>
  .full-height {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .weather-card {
    max-width: 500px;
    width: 100%;
  }
  
  .text-red {
    color: red;
  }
  
  .text-center {
    text-align: center;
  }
  
  .weather-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .full-width {
    width: 100%;
  }
  
  .q-my-md {
    margin: 1em 0;
  }
  
  .q-my-sm {
    margin: 0.5em 0;
  }
  
  .text-subtitle1 {
    font-weight: bold;
  }
  
  .text-bold {
    font-weight: bold;
  }
  </style>
  