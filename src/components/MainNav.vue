<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-grey-1 px-8"
      >
        <a href="/" class="flex h-full items-center text-xl">{{ company }}</a>
        <h2 class="ml-8 flex h-full items-center">
          Developed by {{ auther.firstName }} {{ auther.lastName }}
        </h2>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'Bobo Careers',
      auther: {
        firstName: 'Pratik',
        lastName: 'Kshirsagar',
      },
    };
  },
};
</script>
