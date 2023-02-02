<template>
  <div>
    <b-table :fields="fields" :items="items"> </b-table>
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
        { key: "name", label: "Establishment" },
        { key: "location.formatted_address", label: "Address" },
        { key: "location.postcode", label: "Postcode" },
        { key: "location.region", label: "Region" }
      ]
    };
  }
};
</script>
