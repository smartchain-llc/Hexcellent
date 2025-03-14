<script lang="ts">
  import type { Radix } from "../../core/Radix"
  import { type BitSet, Uint8Bits } from "./Bits"

  let { inputValue}: { inputValue: number}= $props()

</script>
{#snippet bitsOf(pos:BitSet)}
    <div class="bit">{pos}</div>
{/snippet}

<div class="bits-container">
{#each Uint8Bits.bits(inputValue) as bit}
    {@render bitsOf(bit)}
{/each}
</div>

<style>
    div.bits-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
</style>