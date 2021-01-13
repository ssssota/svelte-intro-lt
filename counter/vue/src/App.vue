<template>
  <div>
    <h1>Counter {{count}}</h1>
    <button @click="count = 0">RESET</button>
    <StyledButton @click="count++">+1</StyledButton>
    <StyledButton @click="count--">-1</StyledButton>
  </div>
</template>

<script>
import StyledButton from './components/StyledButton.vue';

export default {
  name: 'App',
  components: {
    StyledButton,
  },
  data: () => ({
    count: 0,
  }),
};
</script>
