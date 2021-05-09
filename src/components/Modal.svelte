<script lang="ts">
  export let visible: boolean = false;

  export let onClose:() => void;
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  &::before {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    content: '';
    background: rgba(255, 255, 255, .5);
    z-index: -1;
  }
}

.modal-content {
  position: relative;
  width: 560px;
  margin: auto;
  margin-top: 120px;
  padding: 40px 64px;
  box-shadow: 0 0 4px #999;
  background: #fff;
  border-radius: 6px;
}

.close {
  position: absolute;
  width: 32px;
  height: 32px;
  top: -36px;
  right: -36px;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0 0 2px #999);
  }
}


</style>
{#if visible}
<div class="modal">
  <div class="modal-content">
    <slot></slot>
    <img on:click={onClose} class="close" src="close.svg" alt="close">
  </div>
</div>
{/if}