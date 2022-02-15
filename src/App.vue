<template>
  <div class="flex flex-col min-h-screen">
    <!-- v-show="showToolBar" -->
    <header  v-show="showToolBar"> 
      <!-- <Header @hide-Show-Toolbar="toggleToolBar" /> -->
      <nav id="home-toolbar" class="z-30 fixed right-0 left-0 ">
        <div class="relative">
          <div class="bg-blue-100 relative z-30">
            <div id="home-tool-bar" class=" h-20 container relative flex flex-row space-x-2 items-center">
                  <!--Menu icon start -->
                    <div class="block lg:hidden ml-3" v-show="showHomeIcon">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div> 
                    <!--Menu icon end -->
                    <div class="text-xl font-semibold" v-show="showHomeIcon">{{toolBarTitle}}</div>

                    <!-- cart layout start in small screen -->
                    <div class="block lg:hidden mr-4" v-show="showSettingsIcon">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div> 
                <!-- cart layout end in small screen -->

                  <!--Menu icon start -->
                <div class=" block lg:hidden ml-3" v-show="showBackIcon" @click="goBack" >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </div> 
                <!--Menu icon end -->
                <div class="text-xl font-semibold -mt-1" v-show="showBackIcon">{{toolBarTitle}}</div> 

                <div class="block lg:hidden ml-3 " v-if="showStudentDetails" @click="goBack">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </div>

                <div class="h-10 w-10 " v-if="showStudentDetails">
                    <img class="rounded-full w-full h-full" src="https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg" alt="">
                </div> 

                <div class="flex flex-col h-full mt-10 -space-y-1.5" v-if="showStudentDetails">
                  <p>{{toolBarTitle}}</p>
                  <p class="text-orange-500 text-xs">Balance KSHs 2,444</p>
                </div> 



            </div>

        </div> 
        </div>
      </nav>
    </header>

    <main class="flex-1  overflow-scroll">
      <router-view @hide-Show-Toolbar="toggleToolBar" @tool-Bar-ToShow="setToolBarToShow"/>
    </main>
    <footer v-show="showToolBar">
      <Footer />
    </footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

export default {
  components:{
    Footer,Header
  },
  setup() {
    console.log("Check route name:")
  },
  data(){
    return {
      showToolBar : true,
      toolBarToShow : '',
      showHomeIcon : false,
      showBackIcon : true,
      showSettingsIcon: false,
      toolBarTitle : 'Home',
      showStudentDetails: false
    }
  },
  methods: {

    toggleToolBar(showToolbar){
      console.log('showToolbar >>><<<<<< '+showToolbar)
      this.showToolBar = showToolbar;
    },
    setToolBarToShow(toolBarData){
      // this.toolBarToShow = toolBarName;
      this.toolBarTitle = toolBarData.toolBarTitle
      this.showSettingsIcon = toolBarData.showSettingsIcon
      this.showBackIcon = toolBarData.showBackIcon
      this.showHomeIcon = toolBarData.showHomeIcon
      this.showToolBar = toolBarData.showToolBar
      this.showStudentDetails = toolBarData.showStudentDetails

      console.log('toolbar to show >>>>>>>>>>><<<<<>>>>>>>>>>>>>> '+this.toolBarToShow)
    },
     goBack(){
      this.$router.go(-1)
      this.$emit('hide-Show-Toolbar', false)
    }
  },
  emits: ['hide-Show-Toolbar','tool-Bar-ToShow','toolBar-Name']

}
</script>

