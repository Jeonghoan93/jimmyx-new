<script setup lang="ts">
import { useDisplay } from 'vuetify'

const milestones = [
  {
    title: 'MVP Completion',
    timeframe: 'Month 1-2',
    description:
      'Finalize the MVP with full feature set and conduct thorough user testing'
  },
  {
    title: 'Market Launch',
    timeframe: 'Month 3',
    description: 'Full public launch with marketing campaign in Berlin'
  },
  {
    title: 'User Acquisition',
    timeframe: 'Month 3-6',
    description: 'Reach 5,000 active users and 200 event hosts'
  },
  {
    title: 'Revenue Generation',
    timeframe: 'Month 4-8',
    description: 'Achieve €10,000 monthly recurring revenue'
  },
  {
    title: 'Expansion',
    timeframe: 'Month 8-12',
    description: 'Expand to 2 additional European cities'
  },
  {
    title: 'Series A Preparation',
    timeframe: 'Month 10-12',
    description: 'Prepare metrics and growth data for Series A fundraising'
  }
]

const fundUsage = [
  {
    category: 'Development',
    percentage: 40,
    description: 'Complete MVP development and launch enhanced features'
  },
  {
    category: 'Marketing',
    percentage: 30,
    description: 'User acquisition campaigns and community building'
  },
  {
    category: 'Operations',
    percentage: 20,
    description: 'Legal, hosting, and operational costs'
  },
  {
    category: 'Hiring',
    percentage: 10,
    description: 'Key team members to accelerate growth'
  }
]

const { xs } = useDisplay()
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
            Join us in creating the platform that revolutionizes how people
            connect through authentic celebrations—an €8.5B market opportunity
            with strong early traction.
          </p>

          <div class="d-flex justify-center gap-4 flex-wrap">
            <v-btn
              color="blue-lighten-1"
              size="large"
              class="text-none text-white px-6"
              elevation="0"
              rounded="pill"
              @click="onClickVisitPartyX"
            >
              <v-icon start>mdi-open-in-new</v-icon>
              Visit Live Platform
            </v-btn>

            <v-btn
              variant="outlined"
              color="blue-lighten-1"
              size="large"
              class="text-none px-6"
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
                    €300,000
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
                    €8.5B
                  </h3>
                  <p class="text-light-2">Addressable market in Europe</p>
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
                Event organizers struggle to find venues and build audiences,
                while people seeking unique experiences have difficulty
                discovering authentic celebrations that match their interests.
              </p>
              <p class="text-light-2">
                This disconnect creates significant friction in a market worth
                €8.5B in Europe alone, with post-pandemic demand for in-person
                experiences surging by 37%.
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

          <v-expansion-panels variant="accordion" class="bg-transparent">
            <!-- Problem 1 -->
            <v-expansion-panel class="bg-dark-5 mb-3 rounded-lg">
              <v-expansion-panel-title class="text-light-1">
                <div class="d-flex align-center">
                  <v-icon color="blue-lighten-1" class="mr-3"
                    >mdi-account-star</v-icon
                  >
                  <span>Event Organizers as Brands</span>
                </div>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="text-light-2">
                <p>
                  DJs and organizers are artists and brands in their own right,
                  not just service providers. Current platforms treat them as
                  venues or ticket sellers, missing the influencer-like
                  relationship they have with their audience.
                </p>
                <p class="mt-2">
                  <strong class="text-blue-lighten-1">Our Solution:</strong>
                  We're building influencer-style profiles for organizers where
                  people can follow them directly and receive updates about
                  upcoming events, building lasting connections beyond single
                  events.
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Problem 2 -->
            <v-expansion-panel class="bg-dark-5 mb-3 rounded-lg">
              <v-expansion-panel-title class="text-light-1">
                <div class="d-flex align-center">
                  <v-icon color="blue-lighten-1" class="mr-3"
                    >mdi-spotlight</v-icon
                  >
                  <span>Visibility for Smaller Organizers</span>
                </div>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="text-light-2">
                <p>
                  Smaller organizers with incredible events get overshadowed by
                  big commercial events with larger marketing budgets, despite
                  offering more authentic experiences.
                </p>
                <p class="mt-2">
                  <strong class="text-blue-lighten-1">Our Solution:</strong> Our
                  discovery algorithm prioritizes quality and fit over size,
                  helping users find the perfect event for their tastes rather
                  than just the biggest or most promoted ones.
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Problem 3 -->
            <v-expansion-panel class="bg-dark-5 mb-3 rounded-lg">
              <v-expansion-panel-title class="text-light-1">
                <div class="d-flex align-center">
                  <v-icon color="blue-lighten-1" class="mr-3"
                    >mdi-filter-variant</v-icon
                  >
                  <span>Inadequate Event Filtering</span>
                </div>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="text-light-2">
                <p>
                  Current platforms offer basic filtering by date, location, and
                  general category, but miss critical factors like
                  <strong
                    >age demographics, music subgenres, atmosphere, and crowd
                    vibe.</strong
                  >
                </p>
                <p class="mt-2">
                  <strong class="text-blue-lighten-1">Our Solution:</strong>
                  We've developed nuanced filtering with crowd demographics,
                  atmosphere ratings, and vibe indicators to match attendees
                  with their perfect party experience.
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Problem 4 -->
            <v-expansion-panel class="bg-dark-5 mb-3 rounded-lg">
              <v-expansion-panel-title class="text-light-1">
                <div class="d-flex align-center">
                  <v-icon color="blue-lighten-1" class="mr-3"
                    >mdi-camera</v-icon
                  >
                  <span>Limited Event Atmosphere Visibility</span>
                </div>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="text-light-2">
                <p>
                  Static descriptions and promotional photos don't capture the
                  real atmosphere, leading to mismatched expectations and
                  disappointment.
                </p>
                <p class="mt-2">
                  <strong class="text-blue-lighten-1">Our Solution:</strong> Our
                  platform enables live atmosphere sharing with user-generated
                  content, live clips, and real-time updates to give authentic
                  previews of what events are actually like.
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Problem 5 -->
            <v-expansion-panel class="bg-dark-5 mb-3 rounded-lg">
              <v-expansion-panel-title class="text-light-1">
                <div class="d-flex align-center">
                  <v-icon color="blue-lighten-1" class="mr-3"
                    >mdi-ticket-account</v-icon
                  >
                  <span>Beyond Just Ticket Sales</span>
                </div>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="text-light-2">
                <p>
                  Many events aren't just about selling tickets - they require
                  invitation requests, guest list approval, or other custom
                  access methods that current platforms don't support.
                </p>
                <p class="mt-2">
                  <strong class="text-blue-lighten-1">Our Solution:</strong> We
                  offer flexible access options including invitation requests,
                  VIP lists, and custom approval flows, recognizing that
                  exclusivity varies widely among event types.
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Problem 6 -->
            <v-expansion-panel class="bg-dark-5 mb-3 rounded-lg">
              <v-expansion-panel-title class="text-light-1">
                <div class="d-flex align-center">
                  <v-icon color="blue-lighten-1" class="mr-3">mdi-tools</v-icon>
                  <span>Comprehensive Management Tools</span>
                </div>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="text-light-2">
                <p>
                  Event organizers struggle with fragmented tools for different
                  aspects of event management (staff, venues, timelines, guest
                  lists).
                </p>
                <p class="mt-2">
                  <strong class="text-blue-lighten-1">Our Solution:</strong> Our
                  event management platform includes staff coordination, venue
                  timelines, and dynamic planning tools tailored to specific
                  event types (festivals, club nights, pub crawls, etc.).
                </p>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- Problem 7 -->
            <v-expansion-panel class="bg-dark-5 mb-3 rounded-lg">
              <v-expansion-panel-title class="text-light-1">
                <div class="d-flex align-center">
                  <v-icon color="blue-lighten-1" class="mr-3"
                    >mdi-palette-swatch</v-icon
                  >
                  <span>Event-Type Adaptive UX</span>
                </div>
              </v-expansion-panel-title>
              <v-expansion-panel-text class="text-light-2">
                <p>
                  Different event types (festivals, pub crawls, club nights,
                  private parties) have radically different management needs,
                  but current platforms offer one-size-fits-all interfaces.
                </p>
                <p class="mt-2">
                  <strong class="text-blue-lighten-1">Our Solution:</strong>
                  We've developed adaptive UX that changes based on event type,
                  showing only relevant features and tailoring the experience to
                  make organizers more productive and successful.
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
            12-Month Roadmap
          </h2>
          <v-card class="bg-dark-4 rounded-xl" elevation="10">
            <v-card-text class="pa-6">
              <v-timeline align="start" class="py-4">
                <v-timeline-item
                  v-for="(milestone, i) in milestones"
                  :key="i"
                  :dot-color="'blue-lighten-1'"
                  size="small"
                >
                  <template v-slot:opposite>
                    <span class="text-caption text-grey-lighten-2">{{
                      milestone.timeframe
                    }}</span>
                  </template>
                  <div>
                    <h3 class="text-h6 font-weight-bold text-light-1">
                      {{ milestone.title }}
                    </h3>
                    <p class="text-light-2">{{ milestone.description }}</p>
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
              <v-list class="bg-transparent pa-0">
                <v-list-item
                  v-for="(item, i) in fundUsage"
                  :key="i"
                  class="px-0 py-4"
                >
                  <template v-slot:prepend>
                    <div
                      class="text-h6 font-weight-bold text-blue-lighten-1 w-16 text-center"
                    >
                      {{ item.percentage }}%
                    </div>
                  </template>
                  <v-list-item-title class="text-light-1 text-h6">{{
                    item.category
                  }}</v-list-item-title>
                  <v-list-item-subtitle class="text-light-2">{{
                    item.description
                  }}</v-list-item-subtitle>
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
            Following this €300,000 pre-seed investment, we project a Series A
            round of €2-3M within 12 months based on achieving key metrics:
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
          <v-img src="/assets/images/techno.jpg" :height="xs ? 375 : 275" cover>
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
                <div class="d-flex gap-4">
                  <v-btn
                    color="blue-lighten-1"
                    size="large"
                    class="text-none text-white px-6"
                    elevation="0"
                    rounded="pill"
                    @click="onClickNavigateToLinkedin"
                  >
                    <v-icon start>mdi-message-text</v-icon>
                    Connect for Details
                  </v-btn>

                  <v-btn
                    variant="outlined"
                    color="white"
                    size="large"
                    class="text-none px-6"
                    elevation="0"
                    rounded="pill"
                    @click="onClickVisitPartyX"
                  >
                    <v-icon start>mdi-open-in-new</v-icon>
                    Visit Platform
                  </v-btn>
                </div>
              </v-container>
            </div>
          </v-img>
        </div>
      </v-card>
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
  text-fill-color: transparent;
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
