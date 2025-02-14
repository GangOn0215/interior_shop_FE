<template>
  <div class="member__list__container">
    <div class="member__list__box">
        <table class="member__table">
          <thead class="member__table__header">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Cellphone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="member in members" :key="member.id">
              <td>{{ member.id }}</td>
              <td>{{ member.name }}</td>
              <td>{{ member.cellphone }}</td>
            </tr>
          </tbody>
        </table>
    </div>
  </div>
</template>

<script>
import selectMemberListArgs from '@/api/interface/member/selectMemberListArgs'
import { defaultAxios } from '@/api/axios'
import { SELECT_MEMBER_LIST } from '@/api/apiURL'

export default {
  name: 'MemberListContainer',
  data () {
    return { 
      message: 'containers / Member List Container', 
      members: [] // 회원 데이터를 저장할 배열 
    } 
  }, 
  mounted () {
    this.init()
  },
  methods: {
    async init () {
      this.getMemberList()
    },
    async getMemberList () {
      const params = { ...selectMemberListArgs }
      
      try {
        const response = await defaultAxios(SELECT_MEMBER_LIST, params) //?

        const memberList = response.data.res // 응답 데이터를 members 배열에 저장

        memberList.forEach((member) => {
          this.members.push(member)
        })
      } catch (error) {
        console.error('Error fetching member list:', error)
      }
    }
  }
}
</script>

<style scoped>
.member__list__container {
  padding: 20px;
  background-color: #f9f9f9;
}

.member__list__box {
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.member__table {
  width: 100%;
  border-collapse: collapse;
}

.member__table th, .member__table td {
  padding: 12px 15px;
  text-align: left;
}

.member__table__header {
  background-color: #007BFF;
  color: #fff;
}

.member__table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

.member__table tbody tr:hover {
  background-color: #e9e9e9;
}
</style>
