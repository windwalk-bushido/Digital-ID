<template>

	<div class="modal">
		<img class="img" src="./assets/samurai.png" alt="">

		<h1 class="heading">Milijan Mosić</h1>

		<div class="dots">
			<h3>Web Developer</h3>
			<h3>Minimalist</h3>
			<h3>Music Producer</h3>
		</div>

		<div class="links">
			<a class="a" href="">
				<Icon :icon="['fab', 'facebook']" class="icon"/>
			</a>
			<a class="a" href="">
				<Icon :icon="['fab', 'github']" class="icon"/>
			</a>
			<a class="a" href="">
				<Icon :icon="['fab', 'instagram']" class="icon"/>
			</a>
			<a class="a" href="">
				<Icon :icon="['fab', 'mastodon']" class="icon"/>
			</a>
			<a class="a" href="">
				<Icon :icon="['fas', 'envelope']" class="icon"/>
			</a>
			<a class="a" href="">
				<Icon :icon="['fas', 'code']" class="icon"/>
			</a>
		</div>

		<div class="footer">
			<button class="btn_mode">
				<Icon :icon="['fas', 'sun']" class="btn-icon"/>
			</button>

			<p class="year">2021.</p>

			<button class="btn_hide">
				<Icon :icon="['fas', 'eye']" class="btn-icon"/>
			</button>
		</div>
	</div>

</template>

<script>

	//import Componenta from './components/Componenta.vue'

	export default
	{
		name: "App",
		//components: { Componenta },
	}

</script>

<style>

	html
	{
		font-family: 'Poppins', sans-serif;
		font-size: 16px;
	}

	.modal
	{
		@apply flex flex-col justify-center;
	}

	.img
	{
		@apply w-full rounded-3xl;
	}

	.heading
	{
		@apply m-0 p-0 text-center text-5xl font-semibold -mt-2 mb-8 shadow-xl pb-4 rounded-bl-3xl rounded-br-3xl;
	}

	.dots
	{
		@apply flex flex-col justify-center items-center text-2xl mb-8 shadow-xl pb-4 rounded-bl-3xl rounded-br-3xl;
	}

	.links
	{
		@apply grid grid-cols-3 gap-4 place-items-center mb-8 shadow-xl pb-4 rounded-bl-3xl rounded-br-3xl;
	}

	.a 
	{
		@apply bg-purple-900 p-6 w-16 h-16 rounded-full hover:bg-purple-600 flex justify-center align-middle items-center;

		transition: all 150ms;
	}

	.icon
	{
		@apply text-white text-4xl;
	}

	.a:hover
	{
		box-shadow: 0px 8px 8px 0px rgba(76,29,149,0.75);
		-webkit-box-shadow: 0px 8px 8px 0px rgba(76,29,149,0.75);
		-moz-box-shadow: 0px 8px 8px 0px rgba(76,29,149,0.75);

		transition: all 150ms;
	}

	.footer
	{
		@apply flex flex-row justify-center align-top text-xl pb-2;
	}

	.year
	{
		@apply ml-4 mr-4
	}

	.btn-icon
	{
		@apply text-3xl;
	}

</style>
