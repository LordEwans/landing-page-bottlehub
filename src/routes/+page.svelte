<script lang="ts">
	import Navigation from '../components/Navigation.svelte';
	import Hero from '../components/Hero.svelte';
	import Intro from '../components/Intro.svelte';
	import Footer from '../components/Footer.svelte';
	import Contact from '../components/Contact.svelte';
</script>

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,700;1,400&display=swap"
		rel="stylesheet"
	/>
	<title>BottleHub - Gambling on The Edge</title>
</head>
<div class="body animate-border">
	<div class="lg:flex lg:justify-center lg:items-center min-h-screen">
		<div class="lg:container">
			<Navigation />
			<Hero />
			<Footer />
		</div>
	</div>
	<Contact />
</div>
