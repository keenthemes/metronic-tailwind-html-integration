<template>
	<div class="flex grow">
		<Sidebar />
		<div class="kt-wrapper flex grow flex-col">
			<Header />
			<main class="grow pt-5" id="content" role="main">
			</main>
			<Footer />
		</div>
	</div>
	<SearchModal />
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Sidebar from './components/Sidebar.vue';
import SearchModal from './components/SearchModal.vue';
import {nextTick, onMounted} from "vue";
import KTUI from "@keenthemes/ktui/src/index.ts";
import KTComponent from "./metronic/core/index.ts";
import KTLayout from './metronic/app/layouts/demo1.js';

onMounted(() => {
	nextTick(() => {
		KTUI.init();
		KTComponent.init();
		KTLayout.init();
	}, 0)
})
</script>
