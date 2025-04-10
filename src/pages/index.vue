<script setup lang="ts">
const showPartyXVisionDialog = ref(false)
</script>

<template>
  <Navbar />

  <v-container class="bg-gray-6 mt-[60px] flex flex-col gap-6">
    <!-- Hero Section -->
    <section class="py-16">
      <v-row justify="center" align="center">
        <v-col cols="12" md="8" class="text-center">
          <h1 class="text-gradient text-h2 font-weight-bold mb-6">
            Accelerate Humanity's Galactic Journey
          </h1>
          <p class="text-light-2 text-body-1 mb-8">
            Free people from labor and help individuals discover their fullest
            potential
          </p>
          <v-btn class="hover:scale-105 text-none">
            <template #append>
              <v-icon class="hover:scale-105"> mdi-rocket-launch</v-icon>
            </template>

            <span @click="() => $router.push('/deal')" class="font-semibold">
              Investment Opportunity
            </span>
          </v-btn>
        </v-col>
      </v-row>
    </section>

    <!-- Mission Section -->
    <section class="py-12 rounded-lg">
      <v-row justify="center">
        <v-col cols="12" md="10" class="text-center px-8">
          <h2 class="text-h4 font-weight-bold mb-6 text-light-1">
            Our Mission
          </h2>
          <p class="text-light-2 text-body-1">
            To help humanity become a galactic civilization sooner by creating
            technologies that free us from routine labor and accelerate each
            individual's journey to discover their own best version earliest
            possible.
          </p>
        </v-col>
      </v-row>
    </section>

    <!-- Ventures Section -->
    <section class="py-12">
      <h2 class="text-h4 font-weight-bold mb-8 text-center text-light-1">
        My Ventures
      </h2>

      <v-row>
        <!-- AgentX Card -->
        <v-col cols="12" md="4">
          <v-card class="bg-dark-4 rounded-xl overflow-hidden" elevation="10">
            <div class="card-header-with-bg">
              <v-img
                src="/assets/images/office2.jpg"
                height="140"
                cover
                class="card-bg-image"
              >
                <div class="overlay overlay-general">
                  <v-card-item>
                    <v-card-title class="text-h5 font-weight-bold text-white"
                      >AgentX</v-card-title
                    >

                    <span class="text-sm text-grey-lighten-2 mt-2">
                      Work-purpose AI workers
                    </span>
                  </v-card-item>
                </div>
              </v-img>
            </div>

            <v-card-text class="pa-6">
              <p class="text-light-1 font-weight-bold mb-2">Goal:</p>
              <p class="text-light-2 mb-4">
                Free human labor for humanity to focus on more important things
              </p>

              <p class="text-light-1 font-weight-bold mb-2">Products:</p>
              <ul class="text-light-2 mb-6">
                <li class="mb-1">Software Engineer</li>
                <li class="mb-1">Customer Service</li>
                <li class="mb-1">HR service for Robotics</li>
                <li class="mb-1">Enterprise Workflow Integration</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- ArtX Card -->
        <v-col cols="12" md="4">
          <v-card class="bg-dark-4 rounded-xl overflow-hidden" elevation="10">
            <div class="card-header-with-bg">
              <v-img
                src="/assets/images/profile.jpg"
                height="140"
                cover
                class="card-bg-image"
              >
                <div class="overlay overlay-general">
                  <v-card-item>
                    <v-card-title class="text-h5 font-weight-bold text-white"
                      >ArtX</v-card-title
                    >

                    <span class="text-sm text-grey-lighten-2 mt-2">
                      Create your arts with AI
                    </span>
                  </v-card-item>
                </div>
              </v-img>
            </div>

            <v-card-text class="pa-6">
              <p class="text-light-1 font-weight-bold mb-2">Goal:</p>
              <p class="text-light-2 mb-4">Democratize creative expression</p>

              <p class="text-light-1 font-weight-bold mb-2">Products:</p>
              <ul class="text-light-2 mb-6">
                <li class="mb-1">Film Maker</li>
                <li class="mb-1">Literature</li>
                <li class="mb-1">Visual Arts Generation</li>
                <li class="mb-1">Cross-media Content Creation</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- PartyX Card -->
        <v-col cols="12" md="4">
          <v-card class="bg-dark-4 rounded-xl overflow-hidden" elevation="10">
            <div class="card-header-with-bg">
              <v-img
                src="/assets/images/techno.jpg"
                height="140"
                cover
                class="card-bg-image"
              >
                <div class="overlay overlay-general">
                  <v-card-item>
                    <v-card-title class="text-h5 font-weight-bold text-white"
                      >PartyX</v-card-title
                    >
                    <span class="text-sm text-grey-lighten-2 mt-2">
                      Airbnb for party organizers
                    </span>
                  </v-card-item>
                </div>
              </v-img>
            </div>

            <v-card-text class="pa-6">
              <p class="text-light-1 font-weight-bold mb-2">Our Vision:</p>

              <p class="text-light-2 mb-3">
                AI's inevitable rise demands a human counterforce. PartyX
                champions authentic connection as essential infrastructure for
                our evolving future.
                <strong class="text-light-1"
                  >Invest in more than a platform – invest in the
                  movement.</strong
                >
              </p>
              <v-btn
                variant="text"
                color="blue-accent"
                @click="showPartyXVisionDialog = true"
                class="text-none px-0 mb-4"
                size="small"
              >
                Read the Full Vision...
                <v-icon end size="small">mdi-arrow-right</v-icon>
              </v-btn>

              <p class="text-light-1 font-weight-bold mb-2">Products:</p>
              <ul class="text-light-2 mb-6">
                <li class="mb-1">Event Platform</li>
                <li class="mb-1">Event Management Platform</li>
                <li class="mb-1">Host Revenue Generation</li>
                <li class="mb-1">Community Building</li>
              </ul>

              <p class="text-light-1 font-weight-bold mb-2">Current Status:</p>
              <div class="d-flex flex-column gap-2 mb-4">
                <div class="d-flex align-center justify-space-between">
                  <span class="text-light-2">MVP Completion</span>
                  <span class="text-blue-accent font-weight-bold">80%</span>
                </div>
                <v-progress-linear
                  model-value="80"
                  color="blue-lighten-1"
                  height="8"
                  rounded
                ></v-progress-linear>
                <div class="d-flex align-center justify-end mt-2">
                  <span class="text-light-2 text-caption mr-2"
                    >Visit website:</span
                  >
                  <v-btn
                    variant="text"
                    color="blue-accent"
                    size="small"
                    href="https://partyxberlin.com"
                    target="_blank"
                  >
                    <v-icon>mdi-open-in-new</v-icon>
                  </v-btn>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <!-- About Section -->
    <section class="py-12 bg-dark-5 rounded-lg">
      <v-row align="center" class="pa-10">
        <v-col cols="12" md="5">
          <v-img
            src="/assets/images/main.jpg"
            class="rounded-xl"
            alt="Founder Photo"
            cover
          ></v-img>
        </v-col>

        <v-col cols="12" md="7">
          <h2 class="text-h4 font-weight-bold mb-6 text-light-1">About Me</h2>
          <p class="text-light-2 text-body-1 mb-4">
            I'm a Senior Software Engineer with a passion for leveraging
            technology to solve humanity's biggest challenges. Currently working
            with a Swedish tech (IoT) company while developing PartyX to MVP
            stage.
          </p>

          <p class="text-light-2 text-body-1 mb-4">
            My mission as a founder is simple but bold: before I die, to help
            each individual on this planet uncover their fullest potential. I
            believe technology, especially AI, should liberate us—not replace
            us—and act as a launchpad toward richer, more meaningful lives.
            PartyX is just the beginning: a cultural movement disguised as a
            platform. Once scaled, it will pave the way for ArtX and AgentX —
            creative and productivity infrastructures designed to empower
            expression and automate labor. Together, these ventures aim to make
            freedom, creativity, and human connection not the exception, but the
            norm — accelerating humanity’s path toward a galactic future.
          </p>

          <div class="d-flex flex-wrap gap-2 mb-6">
            <v-chip color="blue" class="mr-2 mb-2">
              <v-icon start>mdi-code-braces</v-icon>
              Software Engineering
            </v-chip>
            <v-chip color="purple" class="mr-2 mb-2">
              <v-icon start>mdi-brain</v-icon>
              AI Development
            </v-chip>
            <v-chip color="blue" class="mr-2 mb-2">
              <v-icon start>mdi-rocket-launch</v-icon>
              Entrepreneurship
            </v-chip>
          </div>
        </v-col>
      </v-row>
    </section>

    <!-- Contact Section -->
    <section class="py-12 rounded-lg">
      <v-row justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h2 class="text-h4 font-weight-bold mb-6 text-white">
            Let's Connect
          </h2>
          <p class="text-white text-body-1 mb-8">
            Whether you're an investor interested in PartyX, a potential
            collaborator for future ventures, or a company looking for technical
            leadership, I'd love to hear from you.
          </p>
          <v-btn
            @click="onClickNavigateToLinkedin"
            size="large"
            class="text-dark-6 px-8"
            elevation="0"
            rounded="pill"
          >
            <v-icon start>mdi-email-outline</v-icon>
            <span class="font-semibold"> Get In Touch </span>
          </v-btn>
        </v-col>
      </v-row>
    </section>
  </v-container>

  <v-dialog v-model="showPartyXVisionDialog" max-width="750px" scrollable>
    <v-card class="bg-dark-5">
      <v-card-title
        class="text-h5 text-light-1 font-weight-bold pa-4 d-flex justify-space-between align-center"
      >
        <span>Why PartyX Matters Now</span>
        <v-btn
          icon="mdi-close"
          variant="text"
          @click="showPartyXVisionDialog = false"
          size="small"
        ></v-btn>
      </v-card-title>
      <v-divider></v-divider>

      <v-card-text
        class="text-light-2 pa-5 text-body-1"
        style="line-height: 1.7"
      >
        <p class="mb-5">
          We perceive AI less as a standalone disruption and more as an integral
          element emerging within humanity's ongoing evolution – a necessary
          phase, perhaps even destiny, in how our shared reality continues to
          unfold. It feels less like something that *happened*, and more like
          something that *had* to happen.
        </p>
        <p class="mb-5">
          As this inevitable process reshapes familiar structures, potentially
          freeing up significant human time perhaps facilitated by concepts like
          general income, we anticipate not just societal adjustments, but a
          profound inner shift. There will be an amplified yearning for
          <strong>meaningful experiences</strong>, authentic
          <strong>self-expression</strong>, and deeper
          <strong>human connection</strong> – needs that resonate beyond
          everyday language but are intuitively felt.
        </p>
        <p class="mb-5">
          PartyX is conceived precisely for this emerging inner landscape. It
          stands as a vital <strong>counterforce</strong>, dedicated to
          nurturing genuine human interaction, shared celebration, and the
          <strong>rebellious spirit of authentic community</strong> within an
          increasingly complex world. It’s designed to strengthen the essential
          social bonds that anchor us and enrich the human experience as we
          navigate this next stage together.
        </p>
        <p>
          We appreciate that different partners operate on different timelines,
          fully recognizing that exits following early rounds are a natural
          aspect of venture investment. For PartyX itself, the vision is fixed
          on a longer trajectory: Our unwavering objective is
          <strong
            >to become the number one corporation in Europe by market
            capitalization within three years.</strong
          >
          This is the outcome we are dedicated to building
        </p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style>
/* global background color */
body {
  background-color: #1c1c1e;
}

/* target the root div (v-app) */
.v-application {
  background-color: #1c1c1e;
}

:root {
  /* Gray Scale from the provided colors */
  --color-gray-1: #8e8e93;
  --color-gray-2: #636366;
  --color-gray-3: #48484a;
  --color-gray-4: #3a3a3c;
  --color-gray-5: #2c2c2e;
  --color-gray-6: #1c1c1e;

  /* Accent colors */
  --color-blue: #0a84ff;
  --color-blue-dark: #0066cc;
  --color-blue-accent: #36a3ff;
  --color-purple: #bf5af2;
  --color-purple-dark: #9945c7;
  --color-gold: #ffd60a;
  --color-gold-dark: #e6b800;
}

/* Background Classes */
.bg-dark {
  background-color: var(--color-gray-6) !important;
}
.bg-dark-5 {
  background-color: var(--color-gray-5) !important;
}
.bg-dark-4 {
  background-color: var(--color-gray-4) !important;
}

/* Text Colors */
.text-light-1 {
  color: #ffffff !important;
}
.text-light-2 {
  color: rgba(255, 255, 255, 0.8) !important;
}
.text-dark-6 {
  color: var(--color-gray-6) !important;
}
.text-blue {
  color: var(--color-blue) !important;
}
.text-blue-accent {
  color: var(--color-blue-accent) !important;
}
.text-purple {
  color: var(--color-purple) !important;
}
.text-gold {
  color: var(--color-gold) !important;
}

/* Text Gradient */
.text-gradient {
  background: linear-gradient(135deg, var(--color-gold), var(--color-blue));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
}

/* Custom Styles */
ul {
  list-style-type: none;
  padding-left: 8px;
}

ul li {
  position: relative;
  padding-left: 16px;
}

ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-blue);
}

/* Card headers with background images */
.card-header-with-bg {
  position: relative;
}

.card-bg-image {
  height: 140px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 24px;
  backdrop-filter: blur(1px);
}

/* Optimized overlay gradients for better text visibility */
.overlay-general {
  background: linear-gradient(
    135deg,
    rgba(10, 12, 03, 0.58),
    rgba(0, 21, 26, 0.79)
  ) !important;
}
</style>
