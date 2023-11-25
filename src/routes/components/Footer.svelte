<script>
	import AX from './AX.svelte';
</script>

<div class="flex justify-center">
	<footer
		class="footer footer-center p-10 w-[96%] mb-4 rounded-3xl border-b border-[hsl(var(--p))] border-opacity-40 text-primary"
	>
		<nav>
			<div class="grid grid-flow-col gap-6 text-[var(--text)]">
				<p>Need Help? <a href="mailto:help@bottlehub.io" class="underline">Email Us</a></p>
			</div>
		</nav>
		<aside class="flex w-full justify-between">
			<p class="font-bold">
				BottleHub DAO <br />
			</p>
			<p>Copyright © 2023 - All right reserved</p>
		</aside>
	</footer>
</div>

<style lang="postcss">
	footer {
		@apply rounded-3xl mt-4 w-[96%] border-b border-[hsl(76,100%,50%)] border-opacity-40;
	}
</style>
