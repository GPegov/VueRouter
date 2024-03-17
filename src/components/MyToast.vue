<template>
    <!--<div class="toast">
        <alert>Введите имя и фамилию гостя</alert>
    </div>-->
    <div class="toast-wrapper">
        <div class="toast">
            Введите имя и фамилию гостя
        </div>
    </div>
</template>


<script setup>


</script>


<style>
@media screen and (max-width: 500px) {
.toast-wrapper {
    display: flex;
    justify-content: center;

  }
  .toast {
    padding: 20px;
    color: white;
    background: #ff0062;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
    max-width: 300px;
    margin: 0 auto;
  }
}
</style>