<template>
  <div>
    <b-table :fields="fields" :items="items">
      <template #cell(weather)="data">
        <div v-for="(weatherData, index) in data.item.weather" :key="index">
          <img
              :src="`http://openweathermap.org/img/wn/${weatherData.icon}.png`"
            />
            <strong>{{ weatherData.description }}</strong>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import { BTable } from "bootstrap-vue";
export default {
  props: {
    items: {
      type: Array,
      required: false,
      default: () => {
        return [];
      }
    }
  },

  components: {
    BTable
  },

  data() {
    return {
      fields: [
        { key: "dt_txt", label: "Date" },
        { key: "weather", label: "Weather" }
      ]
    };
  }
};
</script>
