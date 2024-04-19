<template>
  <div class="p-4 mb-4 bg-green-300">
    <div>
      <!-- <p>
        <a
          href="#"
          v-for="locale in availableLocales"
          :key="locale.code"
          @click.prevent.stop="setLocale(locale.code)"
        >
          set content to {{ locale.name }} ({{ locale.code }})
        </a>
      </p> -->
      <p>
        <NuxtLink
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
        >
          switch path to {{ locale.name }} ({{ locale.code }})
        </NuxtLink>
      </p>
    </div>
    <nav class="mt-8">
      <ul class="flex gap-2">
        <li>
          <NuxtLink :to="localePath('/')">{{ $t('home') }}</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localePath('about')"> {{ $t('about') }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const { t, locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() =>
  locales.value.filter((l) => l.code !== locale.value)
)
</script>
