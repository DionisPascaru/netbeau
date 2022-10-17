<template>
  <div class="teams">
    <div class="teams-item" v-for="(team, index) in teams" :key="team.id" :style="`z-index: ${ index + 1 };`">
      <img :src="getImgUrl(team.imgPath)" :alt="team.name">
    </div>
    <div class="teams-item" :style="`z-index: ${ teams.length };`">
      <img :src="getImgUrl('netbeau-icon.svg')">
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamsComponent',
  data() {
    return {
      teams: [
        {
          id: 1,
          name: 'Team 1',
          imgPath: 'team1.png'
        },
        {
          id: 2,
          name: 'Team 2',
          imgPath: 'team2.png'
        },
        {
          id: 3,
          name: 'Team 3',
          imgPath: 'team3.png'
        },
        {
          id: 4,
          name: 'Team 4',
          imgPath: 'team4.png'
        }
      ]
    }
  },
  methods: {
    getImgUrl(imgPath) {
      return require(`@/assets/images/${imgPath}`);
    }
  }
}
</script>