<script lang="ts" setup></script>

<template>
  <div>
    <MyHero />

    <!-- Text -->
    <div class="flex justify-center p-5 mt-10">
      <div class="w-[max(50vw,1000px)]">
        <div class="prose">
          <!-- Auswertung -->
          <h1>Auswertung</h1>

          <!-- Platz 5 -->
          <h2>Platz 5: MOTTO5</h2>
          <p>Auf dem 5. Platz mit XXX Stimmen befindet sich XXX.</p>

          <!-- Platz 4 -->
          <h2>Platz 4: MOTTO4</h2>
          <p>Auf dem 5. Platz mit XXX Stimmen befindet sich XXX.</p>

          <!-- Platz 3 -->
          <h2>Platz 3: MOTTO3</h2>
          <p>Auf dem 5. Platz mit XXX Stimmen befindet sich XXX.</p>

          <!-- Platz 2 -->
          <h2>Platz 2: MOTTO2</h2>
          <p>Auf dem 5. Platz mit XXX Stimmen befindet sich XXX.</p>

          <!-- Platz 1 -->
          <h2>Platz 1: MOTTO1</h2>
          <p>Auf dem 5. Platz mit XXX Stimmen befindet sich XXX.</p>
        </div>
      </div>
    </div>

    <div class="divider"></div>

    <!-- Text -->
    <div class="flex justify-center p-5 mt-10">
      <div class="w-[max(50vw,1000px)]">
        <div class="prose">
          <!-- Hinweise -->
          <h1>Hinweise zur Auswertung</h1>
          <p>
            Die Daten wurden aufbereitet und im Anschluss mit GoogleSheets
            ausgwertet.
          </p>

          <h2>Downloadhinweise</h2>
          <p>
            Um die Auswertung so transparent wie möglich zu gestalten, könnt ihr
            einen anonymisierten Datensatz der Umfrage herunterladen.
          </p>
        </div>
      </div>
    </div>

    <div class="pb-16"></div>

    <!-- Data Download Section -->
    <MyDataDownload />

    <MyFooter />
    <!-- <div class="pb-10"></div> -->
  </div>
</template>

<style scoped></style>
