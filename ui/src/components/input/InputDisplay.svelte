<script lang="ts">
  import { BytePrefixes, type ByteRadix } from "../../core/Radix"


  let {radix }: {radix: ByteRadix}= $props()
</script>

<div class="container">
  <div class="display">
    <div class="prefix">{BytePrefixes[radix]}</div>
    <div class="content">12346</div>
  </div>
</div>

<style>
  div.container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  div.display {
    font-family: monospace;
    font-size: 40px;
    color: var(--vscode-editor-foreground);
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--vscode-editor-background);
    width: 75%;
    height: 50px;
    padding: 5px 5px 5px 5px;
    border: 2px solid var(--vscode-activityBar-dropBorder);
    border-radius: 5px;
  }
  .display .prefix {
    align-content: left;
  }
  .display .content {
    align-items: right;
  }
</style>
