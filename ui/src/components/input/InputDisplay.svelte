<script lang="ts">
  import { BytePrefixes, Radix, type ByteRadixId } from "../../core/Radix"
  import BitsDisplay from "./BitsDisplay.svelte"


  let {radix, inputValue}: {radix: Radix, inputValue: number}= $props()

</script>

<div class="container">
  <div class="display">
    <div class="prefix">{radix.prefix}</div>
    <input class="content" placeholder={radix.toStr(inputValue)}/>
  </div>
  <BitsDisplay {inputValue} />
</div>
<style>
  div.container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  div.display {
    font-family: monospace;
    font-size: 40px;
    color: var(--vscode-editor-foreground);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--vscode-editor-background);
    width: 100%;
    height: 50px;
    padding: 5px 5px 5px 5px;
    border: 2px solid var(--vscode-activityBar-dropBorder);
    border-radius: 5px;
  }
  .display .prefix {
    align-content: left;
  }
  input.content {
    text-align: right;
    border: 0px transparent;
    width: 100%;
    font-family: monospace;
    font-size: 40px;
    color: var(--vscode-editor-foreground);
    background-color: var(--vscode-editor-background);
    border: 2px solid var(--vscode-activityBar-dropBorder);
    align-items: right;
  }
  input.content:focus{
    outline: 0px;
  }
@media screen and (max-width: 275px) {
  div.display  {
		font-size: 20px;
		height: 30px;
  }
}
</style>
