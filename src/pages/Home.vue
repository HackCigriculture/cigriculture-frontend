<template lang="pug">
#home
  div(v-for="poi in pois")
    card(:level="poi.level", :address="poi.address")
  md-input-container.rain
    label
      | 雨量
    md-input(v-model="rain")
    md-button.md-raised.md-primary(@click.native="confirm")
      | 確認
</template>

<script>
import Card from '@/components/Card';

export default {
  name: 'app',
  components: {
    Card,
  },
  data() {
    return {
      rain: 0,
      pois: [
        {
          level: 0,
          address: '110台北市信义区信义路五段7號台北101',
        },
        {
          level: 0,
          address: '111台北市士林區基河路101號',
        },
        {
          level: 0,
          address: '10491台北市中山區玉門街1號',
        },
      ],
      sub: [
        [0.563995, 0.5169975],
        [0.000001, 0.000000],
        [0.520600, 0.534813],
      ],
    };
  },
  methods: {
    confirm() {
      this.$http.post('http://localhost:5000/', JSON.stringify(this.sub)).then((response) => {
        const result = response.body.map(val => val * 200);
        result.forEach((element, index) => {
          // console.log(element);
          if (this.rain > element) {
            this.pois[index].level = 2;
          } else if (element - this.rain < 10) {
            this.pois[index].level = 1;
          } else {
            this.pois[index].level = 0;
          }
        });
      });
    },
  },
};
</script>

<style lang="stylus">
.rain
  width: 90%
  margin: 5%
</style>
