<template>
    
<div class="flex flex-col overflow-hidden">
      <div class="mt-20">
        <div class=" ml-2 mr-2">
          <label for="email" class="block text-sm font-medium text-gray-700">Phone Number to proceed</label>
          <div class="mt-1 flex flex-row">
            <div class="w-20 border-2 border-gray-300 rounded-l-lg flex justify-center items-center">
              <select name="country-codes" id="company-size" class=" w-full h-full rounded-lg focus:outline-none  focus:ring-red-400">
                <option value="">+254</option>
                <option value="small">+255</option>
              </select>
            </div>
            <input id="email" name="Number" type="email" autocomplete="email" required class="w-full border border-l-0 border-gray-300 px-3 py-3 rounded-r-lg shadow-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-red-400" />
          </div>
        </div>

        <router-link class="w-full " :to="{ name: 'Home' }">
          <div class="m-3">
            <button  class="mt-8 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Get Validation Code</button>
          </div>
        </router-link>
        
</div>
</div>
</template>

<script>
export default {
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
            showBackIcon : true,
            showSettingsIcon: false,
            toolBarTitle : 'Login',
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