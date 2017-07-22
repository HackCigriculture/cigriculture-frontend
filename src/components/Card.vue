<template lang="pug">
.card
  .card-box
    .alert(v-bind:class="{ yellow: level == 1, red: level == 2}")
      | {{ prompt }}
    .hint
      | 提示：{{ hint }}
    .location
      | 地址：{{ address }}
    .map
      iframe(:src="googleMaps()",
             allowfullscreen,
             frameborder="0"
             width="100%"
            )
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      prompt: '',
      hint: '',
    };
  },
  props: {
    level: {
      default: 0,
    },
    address: {
      default: '110台北市信义区信义路五段7號台北101',
    },
  },
  methods: {
    googleMaps() {
      return `https://www.google.com/maps/embed/v1/place?key=AIzaSyDo6ek2QYuSXpHvfMxZMJFjurGEKy9_zH8&q=${this.address}`;
    },
    refresh() {
      switch (this.level) {
        case 0:
          this.prompt = '安全';
          this.hint = '當前區域無積水問題';
          break;
        case 1:
          this.prompt = '預警';
          this.hint = '可能存在積水，請注意處理植物';
          break;
        case 2:
          this.prompt = '危險';
          this.hint = '此地區存在積水，請繞行';
          break;
        default:
          this.prompt = '安全';
      }
    },
  },
  watch: {
    level() {
      this.refresh();
    },
  },
  mounted() {
    this.refresh();
  },
};
</script>

<style lang="stylus" scoped>
.card
  width: 90%
  height: 300px
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)
  transition: 0.3s
  margin: 5%

.card:hover
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2)

.card-box
  text-align: left
  width: 100%
  height: 100%
  padding: 20px

.alert
  color: #22dd22
  font-weight: bold
  font-size: 32px
  margin-top: 10px

.yellow
  color: #ffdd22

.red
  color: #ffbbbb

.hint
  margin-top: 25px

.map
  margin-top: 20px
</style>
