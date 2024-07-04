<template>
  <div class="flex grow">
   <Sidebar />
   <div class="wrapper flex grow flex-col">
    <Header />
    <main class="grow content pt-5" id="content" role="content">
     <!-- begin: container -->
     <div class="container-fixed" id="content_container">
     </div>
     <!-- end: container -->
     <!-- begin: container -->
     <div class="container-fixed">
        <!-- put your content here  -->
     </div>
     <!-- end: container -->
    </main>
    <Footer />
   </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import KTComponent from './theme/core/index';
import { nextTick, onMounted } from 'vue';

onMounted(() => {
	nextTick(() => {
		KTComponent.init();
	});
});
</script>