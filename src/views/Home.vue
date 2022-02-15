<template>
  <div class="max-w-md mx-auto p-4 mt-16">
    <div class="py-8 text-base leading-3 space-y-6 text-gray-600"  v-if="kids.length">
      <p>My Kids</p>
      <ul class="space-y-4" :key="kid.id" v-for="kid in kids">
        <li>
          <router-link class="flex flex-row p-4 items-center border-2 rounded-md shadow-lg" :to="{ name: 'Settings', params: { kidId: kid.id, kidName: kid.name } }">
            <img :src="kid.image" class="h-14 w-14 rounded-full ring-1 ring-green-500 p-1" alt="">
            <div class="ml-3">
              <p class="text-lg">{{kid.name}}</p>
              <p class="text-xs"> {{ kid.school }}  </p>
            </div>
          </router-link>
        </li>
       
      </ul>
    </div>
</div>
</template>

<script>
export default {
    data(){
      return{
        toolBarDetails: {
            showToolBar : true,
            toolBarToShow : '-----',
            showHomeIcon : true,
            showBackIcon : false,
            showSettingsIcon: false,
            toolBarTitle : 'Home',
        },
        kids: [
          {
            name:'John Kamau',
            school: 'Matimbei Pry School',
            image: 'https://static8.depositphotos.com/1008303/880/i/950/depositphotos_8803246-stock-photo-asian-college-student.jpg',
            id: 1
          },
           {
            name:'Esther Ngige',
            school: 'St Monicah Preparatory',
            image: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg',
            id: 2
          },
           {
            name:'Dan Kungu',
            school: 'Kamahindu Pry School',
            image: 'https://www.kindpng.com/picc/m/57-573752_school-student-images-png-transparent-png.png',
            id: 3
          },
           {
            name:'James Kamau',
            school: 'Gatamaiyo Boys High',
            image: 'https://some.education/uploads/sliders/1634749276546.png',
            id: 4
          }
        ]
      }
    },
    setup() {
        
    },
    created(){
        this.toggleToolBar()
    },
    methods:{
        toggleToolBar(){
            this.$emit('hide-Show-Toolbar', true)
            this.$emit('tool-Bar-ToShow', this.toolBarDetails)
        }
    },
    emits: ['hide-Show-Toolbar','tool-Bar-ToShow']
}
</script>
