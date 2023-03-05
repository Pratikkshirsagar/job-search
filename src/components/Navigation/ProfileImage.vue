<template>
  <img
    :src="image"
    class="h-8 w-8 rounded-3xl object-contain"
    alt="User profile image"
  />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      url: 'https://avatars.githubusercontent.com/u/32354353?s=400&u=e41e0564c9eeec3d205a67a12777fad214b4a371&v=4',
    };
  },
};
</script>
