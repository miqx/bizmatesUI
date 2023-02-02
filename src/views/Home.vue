<template>
  <div>
    <b-jumbotron>
      <div slot="header" class="d-flex justify-content-center">
        Bizmates Exam
      </div>

      <div slot="lead">
        <b-form @submit.prevent="getInfo">
          <b-input-group>
            <b-form-select
              v-model="selected"
              :options="options"
            ></b-form-select>
            <b-input-group-append>
              <b-button variant="success" type="submit">Submit</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form>
      </div>

      <hr class="my-4" />
      <div class="row no-gutters" v-if="!isResultEmpty">
        <div class="col-5">
          <weather :items="resultData.weather"></weather>
        </div>
        <div class="col-5">
          <places :items="resultData.place"></places>
        </div>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
import {
  BFormSelect,
  BInputGroup,
  BJumbotron,
  BInputGroupAppend,
  BButton,
  BForm
} from "bootstrap-vue";
import axios from "axios";
import Weather from "@/components/Weather";
import Places from "@/components/Places";
import { isNil } from "lodash";

export default {
  components: {
    BFormSelect,
    BJumbotron,
    BInputGroup,
    BInputGroupAppend,
    BButton,
    BForm,
    Weather,
    Places
  },
  data() {
    return {
      options: ["Tokyo", "Yokohama", "Kyoto", "Osaka", "Sapporo", "Nagoya"],
      selected: null,
      resultData: null
    };
  },
  computed: {
    isResultEmpty() {
      return isNil(this.resultData);
    },
    weatherData() {
      if(!this.isResultEmpty)
      {
        console.log(this.resultData.weather[0])
      }

      return null
    }
  },
  methods: {
    getInfo() {
      axios
        .get(`/weather`, {
          params: {
            city: this.selected
          }
        })
        .then(res => {
          this.resultData = res.data;
        });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
