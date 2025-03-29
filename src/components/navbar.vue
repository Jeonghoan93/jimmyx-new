<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <header class="w-full border-b bg-gray-6 shadow h-[57px] fixed z-50">
    <v-container>
      <div class="flex items-center justify-between">
        <div class="w-36">
          <span
            class="text-[#f7f7f7] cursor-pointer font-extrabold text-[14pt]"
            @click="() => router.push('/')"
          >
            JimmyX
          </span>
        </div>

        <div class="flex w-32 justify-end gap-5 items-center">
          <v-btn
            @click="onClickNavigateToLinkedin"
            size="small"
            color="gold"
            class="text-dark-6"
          >
            <span class="text-xs font-semibold"> Connect </span>
          </v-btn>
        </div>
      </div>
    </v-container>
  </header>
</template>
