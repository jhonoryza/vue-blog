<script setup>
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const now = new Date();
const today = weekday[now.getDay()];
</script>

<template>
  <div class="container mx-auto flex flex-col min-h-screen font-rubik">
    <nav class="flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-start sm:items-center uppercase text-base font-semibold
    p-4 fixed sm:relative bg-white sm:bg-transparent shadow-lg sm:shadow-none w-full z-50"
    >
      <RouterLink
          to="/"
          class="text-white bg-primary p-2 text-xl hover:bg-link hover:-rotate-6"
      >
        Fajar SP
      </RouterLink>
      <div class="flex gap-2 sm:gap-12">
        <RouterLink to="/articles" class="text-primary hover:bg-link hover:text-white p-2">
          Articles
        </RouterLink>
        <RouterLink to="/work-with-me" class="text-primary hover:bg-link hover:text-white p-2">
          Work With Me
        </RouterLink>
        <RouterLink to="/about" class="text-primary hover:bg-link hover:text-white p-2">
          About
        </RouterLink>
      </div>
    </nav>
    <main class="mt-20 sm:mt-0 grow">
      <RouterView/>
    </main>
    <footer>
      <div class="flex flex-col sm:flex-row justify-between items-center text-secondary text-sm p-4">
        <div class="self-start">
          © Copyright 2024 Fajar SP<br/>Code snippets are
          <a
              href="https://opensource.org/licenses/MIT"
              class="hover:text-link hover:underline"
              target="_blank"
          >
            MIT licensed
          </a>
          <br/>
          <RouterLink to="/disclaimer" class="text-link hover:text-link-hover hover:underline">
            Disclaimer
          </RouterLink>
        </div>
        <div class="self-end">
          <i>
            Enjoy the rest of your <span>{{ today }}</span>!
          </i>
        </div>
      </div>
    </footer>
  </div>
</template>
