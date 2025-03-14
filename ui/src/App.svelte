<script lang="ts">
  import InputDisplay from './components/input/InputDisplay.svelte'
    import type { ByteRadix } from './core/Radix'

    let radix = $state<ByteRadix>('bin')
</script>

<main>
<div class="app-container">
    <InputDisplay {radix}/>
</div>
</main>

<style>
  div.app-container {
    width: 95%;
    max-width: 400px;
  }
  div{
    font-family: monospace;
  }
</style>