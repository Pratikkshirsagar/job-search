<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-grey-3"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="mr3 ml-4" />

    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <input
          v-model="role"
          type="text"
          placeholder="Software Engineer"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>

      <span
        class="flex h-full items-center border-l border-r border-brand-grey-3 px-3"
      >
        in
      </span>

      <div class="relative flex h-full flex-1 items-center pl-3">
        <label class="absolute left-0 -top-10">Where?</label>
        <input
          v-model="location"
          type="text"
          placeholder="Mumbai"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
    </div>
    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue';

export default {
  name: 'JobSearchForm',
  components: {
    ActionButton,
  },
  data() {
    return {
      role: '',
      location: '',
    };
  },
};
</script>
