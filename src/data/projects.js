const projects = [
  {
    projectName: 'Automation Practice',
    projectSlug: 'automation-practice',
    projectRepoUrl: 'https://github.com/manuel12/automation-practice',
    projectLiveDemoUrl: false,
    projectTechnologies: ['javascript', 'node', 'cypress'],
    projectImgSrc: 'desktopImage',
    projectMobileImgSrc: 'mobileImage',
    projectDesc:
      'The Automation Practice website is a full-fledged website built for atuomation practice purposes. ',

    projectDescContinued:
      'This project aims to complete all the tests cases outlined in the readme file. \
        It implements all such tests cases using the Cypress testing framework.',
    projectFeatures: [],
    projectScreenshots: [],
    frontend: false,
    backend: false,
    automatedTest: true,
  },
  {
    projectName: 'Automation Exercise',
    projectSlug: 'automation-exercise',
    projectRepoUrl:
      'https://github.com/manuel12/automation-exercise-test-cases',
    projectLiveDemoUrl: false,
    projectTechnologies: ['javascript', 'node', 'cypress'],
    projectImgSrc: 'desktopImage',
    projectMobileImgSrc: 'mobileImage',
    projectDesc:
      'The Automation Exercise website is a full-fledged website built for atuomation practice purposes. ',

    projectDescContinued:
      'This project aims to complete all the tests cases outlined in https://automationexercise.com/test_cases. \
    It implements all such tests cases using the Cypress testing framework.',
    projectFeatures: [],
    projectScreenshots: [],
    frontend: false,
    backend: false,
    automatedTest: true,
  },
  {
    projectName: 'Productivity App',
    projectSlug: 'productivity-app',
    projectRepoUrl: 'https://github.com/manuel12/productivity-app',
    projectLiveDemoUrl: false,
    projectTechnologies: [
      'html5',
      'css3',
      'bootstrap',
      'javascript',
      'typescript',
      'express',
      'node',
      'cypress',
    ],
    projectImgSrc: 'desktopImage',
    projectMobileImgSrc: 'mobileImage',
    projectDesc:
      'The Productivity App helps you list and track your todos completed or uncompleted as well as tracking your daily todos and any learnings made.',
    projectDescContinued:
      "You can see see how many todos you've completed today, \
      how many todos on average you've completed daily and also the percentage difference\
      between those 2 number to know if you are ahead of your average or falling behind.",
    projectFeatures: [
      'Todos statistics (Screenshot #1)',
      'Todos filter via tabs: all, completed and uncompleted (Screenshot #2) ',
      'Todos editing (Screenshot #3)',
      'Error labels on inputs (Screenshot #4)',
    ],
    projectScreenshots: [
      'todo-stats',
      'todo-tabs',
      'todo-editing',
      'todo-error-labels',
    ],
    frontend: true,
    backend: true,
    automatedTest: true,
  },
  {
    projectName: 'Expense Tracker',
    projectSlug: 'expense-tracker',
    projectRepoUrl: 'https://github.com/manuel12/django-expense-tracker',
    projectLiveDemoUrl: false,
    projectTechnologies: [
      'html5',
      'css3',
      'bootstrap',
      'javascript',
      'cypress',
      'python',
      'django',
    ],
    projectImgSrc: 'desktopImage',
    projectMobileImgSrc: 'mobileImage',
    projectDesc:
      'Expense Tracker is application that can help you track and list expenses, and also analyze charts and statistics about them.',
    projectDescContinued:
      'The project uses authentication and CRUD operations to create, read, update and delete expenses assigned to a user.<br>\
      The project also performs operations on expenses in order deliver monthly and daily expense averages; current vs last month expense percentages;\
      biggest and smallest expenses by category; and more.',
    projectFeatures: [
      'Expenses by day - Line chart (Desktop & Mobile screenshots)',
      'Expenses by month - Bar chart (Screenshot #1) ',
      'Expenses by week - Bar chart (Screenshot #2)',
      'Expenses by category - Pie chart (Screenshot #3)',
      'Expenses by category and by month - Pie chart (Screenshot #4)',
    ],
    projectScreenshots: [
      'expenseByMonthBarChart',
      'expensesByWeekBarChart',
      'expensesByCategoryBarChart',
      'monthlyExpensesByCategoryBarChart',
    ],
    frontend: true,
    backend: true,
    automatedTest: true,
  },
  {
    projectName: 'Motivation Vault',
    projectSlug: 'motivation-vault',
    projectRepoUrl: 'https://github.com/manuel12/motivation-vault',
    projectLiveDemoUrl: false,
    projectTechnologies: [
      'html5',
      'css3',
      'javascript',
      'react',
      'cypress',
      'python',
      'django',
    ],
    projectImgSrc: 'desktopImage',
    projectMobileImgSrc: 'mobileImage',
    projectDesc:
      'Motivation Vault is an application that hosts optimistic, inspiring, motivational and educational content.',
    projectDescContinued:
      "It allows users to create, read, update and delete 'resources' of such content, along with adding comments and ratings to them.\
      The content is in the form of 4 types of resources:  books, podcasts, podcast episodes or motivational speech videos.<br>\
      Each of these resources will contain a title, a description, an image(or video) and a 'learnings' section.\
      The values section is a list of points on things learned after consuming said resource. In the case of a book or podcast episode, for example,\
      you can see what was learned after reading the book or listening to the episode.<br>Users can also leave a rating or  add a  commnet on each\
      resource, this is achieved through authentication, so that users cannot leave more than 1 rating per resource and so that their names appear on the\
      comments.",
    projectFeatures: [
      'Resource detail page (Screenshot #1)',
      'Resource detail page - Rating section (Screenshot #2)',
      'Resource detail page - Description and learnings sections (Screenshot #3)',
      'Resource detail page - Comment section (Screenshot #4)',
    ],
    projectScreenshots: [
      'detailpage',
      'ratingSection',
      'descriptionAndLearningSection',
      'commentSection',
    ],
    frontend: true,
    backend: true,
    automatedTest: true,
  },
  {
    projectName: 'Series Ratings',
    projectSlug: 'series-ratings',
    projectRepoUrl: 'https://github.com/manuel12/series-ratings',
    projectLiveDemoUrl: false,
    projectTechnologies: [
      'html5',
      'css3',
      'bootstrap',
      'javascript',
      'react',
      'cypress',
      'python',
      'django',
      ,
    ],
    projectImgSrc: 'desktopImage',
    projectMobileImgSrc: 'mobileImage',
    projectDesc:
      'Series Ratings is an application where you can search for the IMDb & Rotten Tomatoes ratings of your favorite series.',
    projectDescContinued:
      'The app visits the IMDb and Rotten Tomatoes  websites and uses their own search features to find out the series\
      you requested, then it parses  the score on each page and delivers it to you on a results page. It also creates a record of the searched series\
      on the database so the next time you search for it the result will be retrieved faster.',
    projectFeatures: [
      'Seach page (Screenshot #1)',
      'Results page (Screenshot #2)',
    ],
    projectScreenshots: ['searchInput', 'searchResult'],
    frontend: true,
    backend: true,
    automatedTest: true,
  },
  {
    projectName: 'MUI Landing Page',
    projectSlug: 'mui-landing-page',
    projectRepoUrl: 'https://github.com/manuel12/mui-landing-page',
    projectLiveDemoUrl: 'https://manuel12.github.io/mui-landing-page/',
    projectTechnologies: ['html5', 'css3', 'javascript', 'react', 'materialui'],
    projectImgSrc: 'desktopImage',
    projectMobileImgSrc: 'mobileImage',
    projectDesc:
      'An example landing page for an italian pizzeria made with Material UI.',
    projectDescContinued:
      'There is no functionality on the page (except for scrolling when clicking on the navbar). \
      This app is purely to showcase my Material UI and landing page creation skills.',
    frontend: true,
    projectFeatures: [
      'Pizza section (Screenshot #1)',
      'Pasta section (Screenshot #2)',
      'Our Story section (Screenshot #3)',
      'Our Location section (Screenshot #4)',
    ],
    projectScreenshots: [
      'pizzaSection',
      'pastaSection',
      'ourStorySection',
      'ourLocationSection',
    ],
  },

  {
    projectName: 'FluentCSS',
    projectSlug: 'fluent-css',
    projectRepoUrl: 'https://github.com/manuel12/fluent-css',
    projectLiveDemoUrl: 'https://manuel12.github.io/fluent-css/',
    projectTechnologies: ['html5', 'css3'],
    projectImgSrc: 'desktopImage',
    projectMobileImgSrc: 'mobileImage',
    projectDesc:
      'A CSS library inspired by the styles of the Duolingo and Font Awesome websites.',
    projectDescContinued:
      'FluentCSS was inspired by the styles of the Duolingo and Font Awesome websites. \
      I wanted to create a library that would inmeditaly improve the look of a website when imported,\
      but also provided the user with utility classes to alter the stylings of the different elements in use.',
    frontend: true,

    projectFeatures: [
      'Headings with depth (Screenshot #1)',
      'Headings with rounded corners (Screenshot #2)',
      'Social and sound buttons (Screenshot #3)',
      'Buttons using width classes (Screenshot #4)',
    ],
    projectScreenshots: [
      'headingsWithDepth',
      'headingsWithRoundCorners',
      'socialAndSoundButtons',
      'buttonsUsingWidthClasses',
    ],
  },
  // {
  //   projectRepoUrl: "https://github.com/manuel12/technical-documentation-page",
  //   projectName: "Custom Library - Documentation",
  //   projectImgSrc: "images/technical-documentation-page.png",
  // },
  // {
  //   projectRepoUrl: "https://github.com/manuel12/landing-page",
  //   projectName: "Landing Page",
  //   projectImgSrc: "images/landing-page.png",
  // },

  // {
];

export default projects;
