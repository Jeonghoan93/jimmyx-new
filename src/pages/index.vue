<script setup lang="ts"></script>

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
              <p class="text-light-1 font-weight-bold mb-2">Goal:</p>
              <p class="text-light-2 mb-4">
                To create sanctuaries of authentic human connection where people
                rediscover joy, freedom, and collective power through
                celebration—reminding us that true community transcends the
                divisions imposed upon us.
              </p>

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
            My background combines technical expertise with entrepreneurial
            vision, focusing on how AI can enhance human capabilities rather
            than replace them. I believe that by creating the right tools, we
            can accelerate humanity's development and expand our horizons beyond
            Earth.
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
