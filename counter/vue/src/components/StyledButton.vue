<template>
  <button @click="e => $emit('click', e)">
    <slot />
  </button>
</template>

<style scoped>
button {
  display: inline-flex;
  width: 3em;
  height: 3em;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
</style>
