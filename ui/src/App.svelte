<script lang="ts">
  import InputDisplay from './components/input/InputDisplay.svelte'
    import { Hexidecimal, type ByteRadixId, type Radix } from './core/Radix'

    let radix = $state<Radix>(Hexidecimal)
    let inputValue = $state(0)
</script>

<main>
<div class="app-container">
    <InputDisplay {radix} {inputValue}/>
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