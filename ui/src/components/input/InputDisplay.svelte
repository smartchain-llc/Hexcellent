<script lang="ts">
  const prefixes = {
    hex: '0x',
    bin: '0b',
    oct: '0o',
  }
  let prefix = $state('hex')
</script>

<div class="container">
  <div class="display">
    <div class="prefix">{prefixes[prefix]}</div>
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
