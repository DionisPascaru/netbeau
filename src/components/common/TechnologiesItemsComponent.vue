<template>
  <div class="technologies-items">
    <div class="items-block">
      <div class="item" v-for="item in items" :key="item.id">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechnologiesItemsComponent',
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Python'
        },
        {
          id: 2,
          name: '.NET'
        },
        {
          id: 3,
          name: 'PHP'
        },
        {
          id: 4,
          name: 'ReactJS'
        },
        {
          id: 5,
          name: 'Angular JS'
        },
        {
          id: 6,
          name: 'Kotlin'
        },
        {
          id: 7,
          name: 'Swift'
        },
        {
          id: 8,
          name: 'C / C++ / C#'
        },
        {
          id: 9,
          name: 'L.A.M.P.'
        },
        {
          id: 10,
          name: 'Unity'
        },
        {
          id: 11,
          name: 'Laravel'
        },
        {
          id: 12,
          name: 'Django'
        },
      ]
    }
  }
}
</script>