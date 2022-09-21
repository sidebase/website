<template>
  <section>
    <div class="mx-auto max-w-screen-xl px-4 lg:px-6 sm:py-6">
      <a id="commands" href="#commands" class="group relative">
        <div class="absolute top-[25px] left-[-30px] hidden group-hover:block">
          <i class="fa fa-link text-sidebase-green-700 text-xl" />
        </div>
        <h1 class="text-4xl font-extrabold text-white">
          Commands
        </h1>
      </a>
      <section class="mt-5">
        <div class="py-4">
          <h1 class="text-xl text-gray-400">
            Develop & Debug the app:
          </h1>
          <div class="rounded-lg bg-gray-700 p-3 font-mono text-lg text-white shadow-lg">
            <div class="flex items-center py-1">
              <i class="fa fa-angle-right mr-2 text-red-400" />
              npm install
              <span class="text-gray-500 ml-4 select-none"># Install dependencies</span>
            </div>
            <div class="flex items-center py-1">
              <i class="fa fa-angle-right mr-2 text-red-400" />
              npm run dev
              <span class="text-gray-500 ml-4 select-none"># Start the fullstack app, including database</span>
            </div>
            <div class="flex items-center py-1">
              <i class="fa fa-angle-right mr-2 text-red-400" />
              npm run story
              <span class="text-gray-500 ml-4 select-none">#  Start histoire for component story based development of UI</span>
            </div>
          </div>
        </div>
        <div class="py-4">
          <h1 class="text-xl text-gray-400">
            Linting & Formatting:
          </h1>
          <div class="rounded-lg bg-gray-700 p-3 font-mono text-lg text-white shadow-lg">
            <div class="flex items-center py-1">
              <i class="fa fa-angle-right mr-2 text-red-400" />
              npm run lint
              <span class="text-gray-500 ml-4 select-none"># Run Eslint</span>
            </div>
            <div class="flex items-center py-1">
              <i class="fa fa-angle-right mr-2 text-red-400" />
              npm run lint:style
              <span class="text-gray-500 ml-4 select-none"># Eslint for formatting & linting</span>
            </div>
            <div class="flex items-center py-1">
              <i class="fa fa-angle-right mr-2 text-red-400" />
              npm run lint:style -- --fix
              <span class="text-gray-500 ml-4 select-none">#  Autofix styles and lints where possible</span>
            </div>
            <div class="flex items-center py-1">
              <i class="fa fa-angle-right mr-2 text-red-400" />
              npm run lint:types
              <span class="text-gray-500 ml-4 select-none">#  typescript typechecking</span>
            </div>
          </div>
        </div>
        <div class="py-4">
          <h1 class="text-xl text-gray-400">
            Testing & Code Coverage & Component Snapshots:
          </h1>
          <div class="rounded-lg bg-gray-700 p-3 font-mono text-lg text-white shadow-lg">
            <div class="flex items-center py-1">
              <i class="fa fa-angle-right mr-2 text-red-400" />
              npm run test
              <span class="text-gray-500 ml-4 select-none"># Run tests once, report results and coverage </span>
            </div>
            <div class="flex items-center py-1">
              <i class="fa fa-angle-right mr-2 text-red-400" />
              npm run test:watch
              <span class="text-gray-500 ml-4 select-none"># Run tests and watch file changes, run tests for changed files</span>
            </div>
            <div class="flex items-center py-1">
              <i class="fa fa-angle-right mr-2 text-red-400" />
              npm run test -- -u
              <span class="text-gray-500 ml-4 select-none">#  Update component snapshots after components changed</span>
            </div>
            <div class="flex items-center py-1">
              <i class="fa fa-angle-right mr-2 text-red-400" />
              npm run test -- -t "some test-text"
              <span class="text-gray-500 ml-4 select-none">#  Run all tests with some test-text in their test(...) description</span>
            </div>
            <div class="flex items-center py-1">
              <i class="fa fa-angle-right mr-2 text-red-400" />
              npm run test:ui
              <span class="text-gray-500 ml-4 select-none">#  Run the vitest testing web UI for easier test interaction</span>
            </div>
          </div>
        </div>
        <div class="py-4">
          <h1 class="text-xl text-gray-400">
            Building & Deploying:
          </h1>
          <div class="rounded-lg bg-gray-700 p-3 font-mono text-lg text-white shadow-lg">
            <div class="flex items-center py-1">
              <i class="fa fa-angle-right mr-2 text-red-400" />
              npm run build
              <span class="text-gray-500 ml-4 select-none"># Build the app for production</span>
            </div>
            <div class="flex items-center py-1">
              <i class="fa fa-angle-right mr-2 text-red-400" />
              npm run start
              <span class="text-gray-500 ml-4 select-none"># Start the app in production (requires npm run build beforehand)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
