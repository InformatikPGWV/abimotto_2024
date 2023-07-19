<script lang="ts" setup></script>

<template>
  <div>
    <!-- Block 1 -->
    <div class="h-screen w-screen lg:flex font-space">
      <!-- Black -->
      <div
        class="h-[50vh] w-screen lg:h-screen lg:w-[50vw] bg-black text-white"
      >
        <div class="flex justify-center items-center h-full">
          <h1
            class="font-semibold text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-center"
          >
            Ihr habt gewählt!
          </h1>
        </div>
      </div>
      <!-- White -->
      <div
        class="h-[50vh] w-screen lg:h-screen lg:w-[50vw] bg-white text-black"
      >
        <div class="flex justify-center items-center h-full">
          <h1
            class="font-semibold text-4xl sm:text-5xl md:text-6xl xl:text-8xl text-center"
          >
            Und das sind die Ergebnisse!
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
