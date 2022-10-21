<template>
  <section>
    <div class="mx-auto max-w-screen-xl py-8 px-4 sm:py-16 lg:px-6">
      <div class="mb-8">
        <h2 class="text-4xl font-extrabold text-white">
          Why should I use <span class="GradientText">sidebase</span>?
        </h2>
        <p class="text-lg text-gray-400">
          sidebase is a production ready Nuxt3 starter template.
          Our primary goal when developing sidebase was to create a full-stack solution for any web application.
          As developers we know how valuable a good developer experience is, which is why we focused on incorporating modern tools that we love to use!
        </p>
      </div>
      <div class="grid border-t border-gray-700 pt-8 text-left md:grid-cols-2 md:gap-16">
        <div>
          <div class="mb-10">
            <h3 class="mb-4 flex items-center text-lg font-medium text-white">
              <i class="fa fa-question-circle text-gray mr-2 text-gray-400" />
              Which technologies are included in sidebase?
            </h3>
            <p class="text-gray-400">
              During the development of sidebase, we experimented with a lot of different technologies. In the end we settled on the following stack:
            </p>
            <ul class="TextBox list-inside list-disc text-gray-400">
              <li><a href="https://v3.nuxtjs.org/" target="_blank">Nuxt3</a> with <a href="https://vuejs.org/" target="_blank">Vue3</a> as the frontend</li>
              <li>Data base models, migrations, queries and easy DB-switching via <a href="https://typeorm.io/" target="_blank">TypeORM</a></li>
              <li>Frontend- and Backend data-transformation via <a href="https://nuxt-sidebase-parse.sidebase.io/index.html" target="_blank">nuxt-sidebase-parse</a> and <a href="https://github.com/colinhacks/zod" target="_blank">zod</a></li>
              <li>In-memory development SQL-database via <a href="https://www.sqlite.org/index.html" target="_blank">sqlite3</a></li>
              <li>Linting through <a href="https://eslint.org/" target="_blank">eslint</a></li>
              <li>Test management, Test UI, component snapshotting via <a href="https://vitest.dev/" target="_blank">vitest</a></li>
              <li>Component tests via <a href="https://testing-library.com/" target="_blank">test-library/vue</a></li>
              <li>API tests via <a href="https://github.com/visionmedia/supertest" target="_blank">supertest</a></li>
              <li>Code coverage via <a href="https://github.com/bcoe/c8" target="_blank">C8</a></li>
              <li>Component stories via <a href="https://histoire.dev/" target="_blank">histoire</a></li>
              <li>CSS utiltities via <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a></li>
              <li>CSS components via <a href="https://antdv.com/components/overview" target="_blank">Ant Design Vue</a></li>
              <li>Type checking in script and template via <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar / vue-tsc</a></li>
            </ul>
          </div>
          <div class="mb-10">
            <h3 class="mb-4 flex items-center text-lg font-medium text-white">
              <i class="fa fa-question-circle text-gray mr-2 text-gray-400" />
              How did you choose the technologies included in sidebase?
            </h3>
            <p class="TextBox text-gray-400">
              When Nuxt3 began releasing their RCs, we at <a href="https://www.sidestream.tech/" target="_blank">SIDESTREAM</a> began working on an internal starter we could use for our enterprise software solutions.
              After having used our internal starter in multiple products, we began thinking about releasing a public version to help others jump into Nuxt3!
              Through our extensive experience with Nuxt, we collected a large library of packages and tooling, that has helped speed up our work and improved our developer experience.
              <br>
              If any packages are missing or if you have any ideas, feel free to open a <a href="https://github.com/sidestream-tech/sidebase/discussions" target="_blank">discussion</a> in our GitHub!
            </p>
          </div>
        </div>
        <div>
          <div class="mb-10">
            <h3 class="mb-4 flex items-center text-lg font-medium text-white">
              <i class="fa fa-question-circle text-gray mr-2 text-gray-400" />
              What makes sidebase different from other starters?
            </h3>
            <p class="text-gray-400">
              sidebase bootstraps a Nuxt3 project that permits developing a backend and a frontend using just Nuxt3 with overarching TypeScript support.
              We want to show the world how enjoyable end-to-end typescript programming can be, displacing the myth that JS/TS-backends are no good.
              This starter solves a lot of the "real-world" problems that occur after you start using Nuxt or any other framework:
            </p>
            <ul class="list-inside list-disc text-gray-400">
              <li>How to write backend tests?</li>
              <li>How to write component tests?</li>
              <li>How to calculate test coverage?</li>
              <li>How to integrate a database?</li>
              <li>How to build a docker image?</li>
            </ul>
            <p class="text-gray-400">
              By answering all these questions, we provide a starter, that lets you skip the setup and jump to the coding drastically decreasing development time.
            </p>
          </div>
          <div class="mb-10">
            <h3 class="mb-4 flex items-center text-lg font-medium text-white">
              <i class="fa fa-question-circle text-gray mr-2 text-gray-400" />
              What drove you to creating sidebase?
            </h3>
            <p class="TextBox text-gray-400">
              While working on our internal starter for Nuxt3, we noticed how hard it was to make a full-stack starter that meets all of your advanced requirements.
              The switch between Nuxt2 and Nuxt3 allowed us to try alternatives to the status quo such as using <a href="https://histoire.dev/" target="_blank">histoire</a> for vite powered component testing.<br>
              Nuxt3 was also the first time we moved to a full-stack typescript setup, rather then using typescript in the frontend and another language for the backend.
              After finishing our first products we noticed how amazing full-stack typescript has become.
              By releasing sidebase, we hope to allow other developers to try out how amazing full-stack typescript applications have gotten!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.GradientText {
  text-align: center;

  background: linear-gradient(to right, #81F6D4 20%, #12a87b 40%, #0FCF97 60%, #81F6D4 80%);
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 1s linear infinite;
  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
}
</style>
