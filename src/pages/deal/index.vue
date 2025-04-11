<script setup lang="ts">
import { useDisplay } from 'vuetify'

import {
  fundUsage,
  focusIcons,
  roadmapFocus,
  marketInsights
} from './constants'

const expandedIndex = ref<number | null>(null)

const toggleExpand = (index: number) => {
  expandedIndex.value = expandedIndex.value === index ? null : index
}

const getShortDescription = (description: string, maxLength = 50): string => {
  if (description.length <= maxLength) {
    return description
  }
  // Find the last space within the maxLength to avoid cutting words
  const lastSpaceIndex = description.lastIndexOf(' ', maxLength)
  return (
    description.substring(0, lastSpaceIndex > 0 ? lastSpaceIndex : maxLength) +
    '...'
  )
}

const { xs } = useDisplay()

const showPartyXVisionDialog = ref(false)
</script>

<template>
  <Navbar />

  <v-container class="bg-gray-6 mt-[60px] flex flex-col gap-10">
    <!-- Hero Section -->
    <section class="py-10">
      <v-row justify="center" align="center">
        <v-col cols="12" md="10" class="text-center">
          <h1 class="text-gradient text-h3 font-weight-bold mb-6">
            PartyX Investment Opportunity
          </h1>
          <p class="text-light-2 text-body-1 mb-8 max-w-2xl mx-auto">
            Fuel the movement defining the future of authentic connection.
            PartyX empowers creators and unites communities through
            unforgettable shared experiences.
          </p>

          <div class="d-flex justify-center gap-4 flex-wrap">
            <v-btn
              color="blue-lighten-1"
              size="large"
              class="text-none text-white px-6 hover:scale-105"
              elevation="0"
              rounded="pill"
              @click="onClickVisitPartyX"
            >
              <v-icon start>mdi-open-in-new</v-icon>
              <span class="font-semibold"> Visit Live Platform</span>
            </v-btn>

            <v-btn
              variant="outlined"
              color="blue-lighten-1"
              size="large"
              class="text-none px-6 hover:scale-105"
              elevation="0"
              rounded="pill"
              @click="onClickNavigateToLinkedin"
            >
              <v-icon start>mdi-linkedin</v-icon>
              Connect on LinkedIn
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </section>

    <!-- Key Metrics Section -->
    <section class="py-6">
      <v-row>
        <v-col cols="12">
          <v-card class="bg-dark-4 rounded-xl overflow-hidden" elevation="10">
            <div class="card-header-with-bg">
              <v-img
                src="/assets/images/techno.jpg"
                :height="xs ? 250 : 200"
                cover
              >
                <div class="overlay overlay-general">
                  <v-card-item>
                    <v-row>
                      <v-col cols="12" md="8">
                        <v-card-title
                          class="text-h4 font-weight-bold text-white"
                          >PartyX at a Glance</v-card-title
                        >
                        <p class="text-grey-lighten-2 mt-2 text-body-1">
                          The Airbnb for party organizers
                        </p>
                      </v-col>
                      <v-col
                        cols="12"
                        md="4"
                        class="d-flex align-center justify-end"
                      >
                        <div class="text-right">
                          <div class="d-flex flex-column align-end">
                            <span class="text-h6 text-white"
                              >MVP Completion</span
                            >
                            <div class="w-full mt-2">
                              <v-progress-linear
                                model-value="80"
                                color="blue-lighten-1"
                                height="10"
                                rounded
                              ></v-progress-linear>
                            </div>
                            <span class="text-h6 text-blue-lighten-1 mt-1"
                              >80%</span
                            >
                          </div>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-item>
                </div>
              </v-img>
            </div>

            <v-card-text class="pa-6">
              <v-row>
                <v-col cols="12" md="4" class="text-center">
                  <h3 class="text-h5 font-weight-bold text-blue-lighten-1 mb-2">
                    €500,000
                  </h3>
                  <p class="text-light-2">Pre-seed investment for 10% equity</p>
                </v-col>
                <v-col cols="12" md="4" class="text-center">
                  <h3 class="text-h5 font-weight-bold text-blue-lighten-1 mb-2">
                    €3M+
                  </h3>
                  <p class="text-light-2">Target Series A within 12 months</p>
                </v-col>
                <v-col cols="12" md="4" class="text-center">
                  <h3 class="text-h5 font-weight-bold text-blue-lighten-1 mb-2">
                    80B+
                    <v-icon
                      @click="showPartyXVisionDialog = true"
                      size="x-small"
                      color="grey-lighten-1"
                      class="ml-1 pb-1"
                      >mdi-information-outline</v-icon
                    >
                  </h3>

                  <p class="text-light-2">Annual revenue potential</p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <!-- Market Opportunity Section -->
    <section class="py-6">
      <h2 class="text-h4 font-weight-bold mb-6 text-light-1">
        Market Opportunity
      </h2>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="bg-dark-4 rounded-xl h-100" elevation="10">
            <v-card-text class="pa-6">
              <h3 class="text-h5 font-weight-bold text-light-1 mb-4">
                The Problem
              </h3>
              <p class="text-light-2 mb-4">
                PartyX creates a marketplace connecting event organizers with
                attendees seeking authentic celebration experiences. We enable
                organizers to list events, manage registrations, and build
                communities around their unique offerings.
              </p>
              <p class="text-light-2">
                For attendees, we provide discovery tools to find experiences
                that resonate with their interests, fostering deeper community
                connections.
              </p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="6">
          <v-card class="bg-dark-4 rounded-xl h-100" elevation="10">
            <v-card-text class="pa-6">
              <h3 class="text-h5 font-weight-bold text-light-1 mb-4">
                Our Solution
              </h3>
              <p class="text-light-2 mb-4">
                PartyX creates a marketplace connecting event organizers with
                attendees seeking authentic celebration experiences. We enable
                organizers to list events, manage registrations, and build
                communities around their unique offerings.
              </p>
              <p class="text-light-2">
                For attendees, we provide discovery tools to find experiences
                that resonate with their interests, fostering deeper community
                connections.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <!-- Market Insights Section for /deal page -->
    <section class="py-6">
      <h2 class="text-h4 font-weight-bold mb-6 text-light-1">
        Market Insights
      </h2>
      <v-card class="bg-dark-4 rounded-xl" elevation="10">
        <v-card-text class="pa-6">
          <p class="text-light-2 mb-6">
            With unparalleled experience in the global party scene, we've
            identified key problems that no existing platform adequately
            addresses:
          </p>

          <v-expansion-panels variant="inset" class="my-3">
            <v-expansion-panel
              class="bg-dark-5 mb-3 rounded-lg"
              v-for="(insight, i) in marketInsights"
              :key="i"
            >
              <v-expansion-panel-title class="text-light-1">
                <div class="d-flex align-center">
                  <v-icon color="blue-lighten-1" class="mr-3">{{
                    insight.icon
                  }}</v-icon>
                  <span>{{ insight.title }}</span>
                </div>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="text-light-2">
                <p>{{ insight.problem }}</p>
                <p class="mt-2">
                  <strong class="text-blue-lighten-1">Our Solution:</strong>
                  {{ insight.solution }}
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>

          <div class="mt-8 pa-6 bg-dark-5 rounded-lg">
            <h3 class="text-h5 font-weight-bold text-light-1 mb-4">
              Our Competitive Edge
            </h3>
            <p class="text-light-2">
              While competitors focus on mass-market ticketing, we're building a
              platform that truly understands the nuanced ecosystem of events
              and celebrations. By addressing these specific pain points that no
              other platform solves, we're creating not just a marketplace but
              an ecosystem that helps organizers succeed and attendees find
              their perfect experience.
            </p>
            <p class="text-light-2 mt-4">
              This deep understanding comes from unparalleled personal
              experience in the global party scene, giving us insights that
              technology-first competitors simply don't have.
            </p>
          </div>
        </v-card-text>
      </v-card>
    </section>

    <!-- Competitive Advantage -->
    <section class="py-6">
      <h2 class="text-h4 font-weight-bold mb-6 text-light-1">
        Competitive Advantage
      </h2>
      <v-card class="bg-dark-4 rounded-xl" elevation="10">
        <v-card-text class="pa-6">
          <v-row>
            <v-col cols="12" md="4">
              <div class="d-flex flex-column items-center mb-6">
                <v-icon color="blue-lighten-1" size="x-large" class="mb-4"
                  >mdi-heart-pulse</v-icon
                >
                <h3
                  class="text-h6 font-weight-bold text-center text-light-1 mb-2"
                >
                  Authentic Experiences
                </h3>
                <p class="text-center text-light-2">
                  Focused on meaningful human connections rather than generic
                  event aggregation
                </p>
              </div>
            </v-col>

            <v-col cols="12" md="4">
              <div class="d-flex flex-column items-center mb-6">
                <v-icon color="blue-lighten-1" size="x-large" class="mb-4"
                  >mdi-account-group</v-icon
                >
                <h3
                  class="text-h6 font-weight-bold text-center text-light-1 mb-2"
                >
                  Community Building
                </h3>
                <p class="text-center text-light-2">
                  Tools for organizers to build lasting communities beyond
                  one-off events
                </p>
              </div>
            </v-col>

            <v-col cols="12" md="4">
              <div class="d-flex flex-column items-center mb-6">
                <v-icon color="blue-lighten-1" size="x-large" class="mb-4"
                  >mdi-wallet-outline</v-icon
                >
                <h3
                  class="text-h6 font-weight-bold text-center text-light-1 mb-2"
                >
                  Economic Enablement
                </h3>
                <p class="text-center text-light-2">
                  Monetization tools that help event creators build sustainable
                  businesses
                </p>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </section>

    <!-- Roadmap & Fund Usage -->
    <section class="py-6">
      <v-row>
        <v-col cols="12" md="7">
          <h2 class="text-h4 font-weight-bold mb-6 text-light-1">
            Use of Time
          </h2>
          <v-card class="bg-dark-4 rounded-xl" elevation="10">
            <v-card-text class="pa-6">
              <p class="text-light-2 mb-6 text-[14px]">
                synchronously. Key initiatives like product scaling, team
                growth, user acquisition, and Series A prep run in parallel from
                Day 1. This roadmap highlights the shifting
                <strong class="text-blue-lighten-1">proportional focus</strong>
                across core streams over the next 12 months. Series A readiness
                is built progressively.
              </p>
              <v-timeline
                align="start"
                density="compact"
                line-inset="8"
                truncate-line="both"
              >
                <v-timeline-item
                  v-for="(item, i) in roadmapFocus"
                  :key="i"
                  dot-color="blue-lighten-1"
                  size="small"
                  fill-dot
                >
                  <div>
                    <h3 class="text-h6 font-weight-bold text-light-1 mb-1">
                      {{ item.phase }}
                    </h3>
                    <p
                      class="text-body-2 text-light-2 mb-3"
                      style="white-space: normal"
                    >
                      {{ item.description }}
                    </p>
                    <div class="mb-2">
                      <div class="d-flex flex-column" style="gap: 4px">
                        <div
                          v-for="focus in item.focusAreas"
                          :key="focus.area"
                          class="d-flex align-center"
                        >
                          <v-icon
                            size="sm"
                            :icon="
                              focusIcons[focus.area] || 'mdi-circle-medium'
                            "
                            class="mr-2"
                            color="grey-lighten-1"
                          ></v-icon>
                          <span class="text-body-2 text-light-1">
                            {{ focus.area }}:
                            <span
                              class="font-weight-bold text-blue-lighten-2"
                              >{{ focus.effort }}</span
                            >
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="5">
          <h2 class="text-h4 font-weight-bold mb-6 text-light-1">
            Use of Funds
          </h2>
          <v-card class="bg-dark-4 rounded-xl" elevation="10">
            <v-card-text class="pa-6">
              <p class="text-light-2 mb-6 text-body-2">
                <strong>Strategy:</strong> Enable founder full-time focus, hire
                strategic infra engineer, leverage AI/cloud for lean ops & max
                output pre-Series A.
              </p>
              <v-list class="bg-transparent pa-0">
                <v-list-item
                  v-for="(item, i) in fundUsage"
                  :key="i"
                  class="px-0 py-3"
                >
                  <template v-slot:prepend>
                    <div
                      class="text-h6 font-weight-bold text-blue-lighten-1 w-16 text-center mr-2"
                    >
                      {{ item.percentage }}%
                    </div>
                  </template>
                  <v-list-item-title
                    class="text-light-1 text-subtitle-1 font-weight-bold mb-1"
                  >
                    {{ item.category }}
                  </v-list-item-title>

                  <div class="d-flex align-start w-100">
                    <p
                      class="text-light-2 mb-0 text-body-2 flex-grow-1"
                      style="line-height: 1.5"
                    >
                      {{
                        expandedIndex === i
                          ? item.description
                          : getShortDescription(item.description, xs ? 40 : 60)
                      }}
                    </p>
                    <v-btn
                      v-if="item.description.length > (xs ? 40 : 60)"
                      variant="text"
                      density="compact"
                      size="small"
                      icon
                      color="blue-lighten-1"
                      class="ml-1 flex-shrink-0 align-self-center"
                      @click="toggleExpand(i)"
                    >
                      <v-icon size="small">{{
                        /* Chevron logic */
                        expandedIndex === i
                          ? 'mdi-chevron-up'
                          : 'mdi-chevron-down'
                      }}</v-icon>
                    </v-btn>
                  </div>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <!-- Future Funding -->
    <section class="py-6">
      <h2 class="text-h4 font-weight-bold mb-6 text-light-1">
        Growth & Future Funding
      </h2>
      <v-card class="bg-dark-4 rounded-xl" elevation="10">
        <v-card-text class="pa-6">
          <p class="text-light-2 mb-6">
            Following this €500,000 pre-seed investment, we project a Series A
            round of €3-5M within 12 months based on achieving key metrics:
          </p>

          <v-row>
            <v-col cols="12" md="3">
              <div class="text-center mb-6">
                <h3 class="text-h5 font-weight-bold text-blue-lighten-1 mb-2">
                  10,000+
                </h3>
                <p class="text-light-2">Monthly Active Users</p>
              </div>
            </v-col>

            <v-col cols="12" md="3">
              <div class="text-center mb-6">
                <h3 class="text-h5 font-weight-bold text-blue-lighten-1 mb-2">
                  500+
                </h3>
                <p class="text-light-2">Regular Event Hosts</p>
              </div>
            </v-col>

            <v-col cols="12" md="3">
              <div class="text-center mb-6">
                <h3 class="text-h5 font-weight-bold text-blue-lighten-1 mb-2">
                  €30K+
                </h3>
                <p class="text-light-2">Monthly Revenue</p>
              </div>
            </v-col>

            <v-col cols="12" md="3">
              <div class="text-center mb-6">
                <h3 class="text-h5 font-weight-bold text-blue-lighten-1 mb-2">
                  3+
                </h3>
                <p class="text-light-2">European City Markets</p>
              </div>
            </v-col>
          </v-row>

          <p class="text-light-2 mt-4">
            Series A funding will accelerate expansion across Europe, develop
            enhanced features for community building, and establish PartyX as
            the premier platform for authentic celebration experiences.
          </p>
        </v-card-text>
      </v-card>
    </section>

    <!-- Call to Action -->

    <section class="py-8 mb-10">
      <v-card class="bg-dark-3 rounded-xl overflow-hidden" elevation="15">
        <div class="card-header-with-bg">
          <v-img src="/assets/images/techno.jpg" :height="xs ? 455 : 275" cover>
            <div class="overlay overlay-general">
              <v-container
                class="d-flex flex-column justify-center align-center text-center h-100"
              >
                <h2 class="text-h3 font-weight-bold text-white mb-6">
                  Ready to Join Our Journey?
                </h2>
                <p class="text-white text-body-1 mb-8 max-w-xl mx-auto">
                  We're seeking visionary investors who understand the power of
                  authentic human connection in building successful platforms.
                </p>

                <div class="d-flex justify-center gap-4 flex-wrap">
                  <v-btn
                    color="blue-lighten-1"
                    size="large"
                    class="text-none text-white px-6 hover:scale-105"
                    elevation="0"
                    rounded="pill"
                    @click="onClickVisitPartyX"
                  >
                    <v-icon start>mdi-open-in-new</v-icon>
                    <span class="font-semibold"> Visit Live Platform</span>
                  </v-btn>

                  <v-btn
                    variant="outlined"
                    color="blue-lighten-1"
                    size="large"
                    class="text-none px-6 hover:scale-105"
                    elevation="0"
                    rounded="pill"
                    @click="onClickNavigateToLinkedin"
                  >
                    <v-icon start>mdi-linkedin</v-icon>
                    Connect on LinkedIn
                  </v-btn>
                </div>
              </v-container>
            </div>
          </v-img>
        </div>
      </v-card>
    </section>
  </v-container>

  <v-dialog v-model="showPartyXVisionDialog" max-width="750px" scrollable>
    <v-card class="bg-dark-5">
      <v-card-text>
        <div class="pa-3 text-caption d-flex flex-column ga-2 text-light-2">
          <span class="font-weight-bold text-blue-lighten-3"
            >Market Context:</span
          >
          <span
            >Derived from the substantial Recreation & Culture market across key
            regions (EU, USA, Korea, Japan), estimated at ~€626 billion annually
            (based on 2020 household spending data).</span
          >

          <span class="font-weight-bold text-blue-lighten-3"
            >Baseline Potential (80B+):</span
          >
          <span
            >Represents projected annual revenue capture within the
            current/near-term market structure.</span
          >

          <span class="font-weight-bold text-blue-lighten-3"
            >Future Potential (Up to 200B+ - AI-Impact Scenario):</span
          >
          <span>
            <span class="font-weight-medium">Why the jump?</span>
            This higher projection (€200B+) anticipates significant future
            economic and societal shifts primarily driven by
            <span class="font-weight-medium">widespread AI adoption</span>. Key
            contributing factors under this scenario include:
          </span>
          <ul class="pl-4">
            <li>
              <span class="font-weight-medium"
                >AI-Driven Economic Changes:</span
              >
              Potential government responses ('General Income'/UBI) to mitigate
              AI's impact on employment, potentially stabilizing or increasing
              consumer spending power.
            </li>
            <li>
              <span class="font-weight-medium"
                >Increased Disposable Income:</span
              >
              AI-driven efficiencies leading to cost reductions in essential
              goods/services, freeing up funds for experiences.
            </li>
            <li>
              <span class="font-weight-medium">Evolving Social Needs:</span>
              A potential increase in demand for authentic human connection and
              shared experiences as society adapts to AI's prevalence.
            </li>
          </ul>
          <span
            >Achieving this €200B+ potential hinges on navigating these complex,
            AI-influenced future transitions successfully.</span
          >
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<style scoped>
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
.bg-dark-3 {
  background-color: var(--color-gray-3) !important;
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
}

/* Custom Styles */
.text-none {
  text-transform: none !important;
}

/* Card headers with background images */
.card-header-with-bg {
  position: relative;
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
    rgba(10, 12, 33, 0.78),
    rgba(0, 21, 46, 0.89)
  ) !important;
}

.max-w-xl {
  max-width: 36rem;
}

.max-w-2xl {
  max-width: 42rem;
}

.h-100 {
  height: 100%;
}

.w-16 {
  width: 4rem;
}

.w-full {
  width: 100%;
}

/* Timeline customization */
.v-timeline-item__body {
  padding: 12px 0;
}

.v-timeline-item__dot--small {
  margin-inline: 0px;
}
</style>
