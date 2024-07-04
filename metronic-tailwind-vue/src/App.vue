<template>
  <div class="flex grow">
    <Sidebar />
    <div class="wrapper flex grow flex-col">
      <Header />
      <main class="grow content pt-5" id="content" role="content">
        <div class="container-fixed">
          <!-- place your content here  -->
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { nextTick, onMounted } from 'vue';
import KTComponent from './theme/core/index.spa';
import KTLayout from './theme/app/layouts/demo1.js';

onMounted(() => {
	nextTick(() => {
		KTComponent.init();
		KTLayout.init();
	});
});
</script>