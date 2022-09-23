<template>
  <div class="about w-full h-screen flex justify-end items-center relative">
    <div
      class="aboutImg bg-center bg-cover bg-no-repeat h-full w-full flex items-center justify-center"
    >
      <div class="w-full h-full backdrop-sepia flex items-center justify-center">
        <div
          class="w-1/2 flex flex-col items-start my-48 rounded border p-32 bg-Opacityblack backdrop-filter backdrop-blur text-white"
        >
          <h1 class="mb-5 text-left">
            This is an online music player website, you can share your favorite
            song with others.
          </h1>
          <p class="text-left">
            This website build with Vue CLI & Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.aboutImg {
  background-image: url("https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2373&q=80");
}
.bg-Opacityblack {
  background: #00000090;
}
</style>
