<template>
    <div class="popup">
        <div class="popup-inner">
            <slot />
        </div>
    </div>
</template>
<script setup>

</script>

<style>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: -60px;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;
}
.popup-inner {
    text-align: center;
    background: white;
    padding: 32px;
}
</style>