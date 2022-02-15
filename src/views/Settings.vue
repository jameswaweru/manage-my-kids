<template>
    <div class="max-w-lg mx-auto  px-8">
    
    <!-- <img src="https://www.pubdials.com/public/uploads/content/1615279975_3142f5aedba6c52a23c4.jpg" class="h-14 w-14 ml-3 rounded-full" alt=""> -->
        <!-- text-base(font)  leading-4 (for spacing text vertically) mx-auto (place content at center with maximum width)-->
        <div class="py-8 text-base leading-7 space-y-6 text-gray-600">
          <p>
            <img src="https://cutewallpaper.org/download.php?file=/21/loading-gif-transparent-background/Bee-Hollow-Farm-beekeeping-classes-and-events-near-Schodack-.gif" class="h-10 w-10" alt="">
          </p>
          <ul class="space-y-2">
            <li class="flex items-center">
              <div class="flex flex-row py-2 border-b border-gray-300 w-full justify-between  items-center ">
                <p>Top Up</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
            </li>
            <li class="flex items-center">
              <div class="flex flex-row py-2 border-b border-gray-300 w-full justify-between  items-center ">
                <p>Set Account Limits</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </li>
            <li class="flex items-center">
              <div class="flex flex-row py-2 border-b border-gray-300 w-full justify-between  items-center ">
                <p>Withdaraw Funds</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
              </div>
            </li>
            <li class="flex items-center">
              <div class="flex flex-row py-2 border-b border-gray-300 w-full justify-between  items-center ">
                <p>Withdaraw Funds</p>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </li>
          </ul>
        </div>

    </div>
</template>

<script>
export default {

    // props: {
    //     kid: Object
    // },
    props: ['kidId','kidName'],
    data(){
      return{
        showToolBar : true,
        toolBarToShow : '',
        showHomeIcon : false,
        showBackIcon : true,
        showSettingsIcon: false,
        toolBarTitle : 'Login',
        toolBarDetails: {
            showToolBar : true,
            toolBarToShow : '-----',
            showHomeIcon : false,
            showBackIcon : false,
            showSettingsIcon: false,
            toolBarTitle : this.kidName,
            showStudentDetails: true
        }
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