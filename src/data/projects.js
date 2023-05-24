const projects = [
  {
    projectName: "Expense Tracker",
    projectSlug: "expense-tracker",
    projectRepoUrl: "https://github.com/manuel12/django-expense-tracker-public",
    projectLiveDemoUrl: false,
    projectTechnologies: [
      "html5",
      "css3",
      "bootstrap",
      "javascript",
      "cypress",
      "python",
      "django",
    ],
    projectImgSrc:
      "https://user-images.githubusercontent.com/4129325/221216267-0067eb7d-3be7-4771-a621-92907c10105a.png",
    projectMobileImgSrc:
      "https://user-images.githubusercontent.com/4129325/221216763-897b1481-2626-4b24-ab2c-ce424d24a51f.png",
    projectDesc:
      "Expense Tracker is application that can help you track and list expenses, and also analyze charts and statistics about them.",
    projectDescContinued:
      "The project uses authentication and CRUD operations to create, read, update and delete expenses assigned to a user.<br>\
      The project also performs operations on expenses in order deliver monthly and daily expense averages; current vs last month expense percentages;\
      biggest and smallest expenses by category; and more.",
    projectFeatures: [
      "Expenses by day - Line chart (Desktop & Mobile screenshots)",
      "Expenses by month - Bar chart (Screenshot #1) ",
      "Expenses by week - Bar chart (Screenshot #2)",
      "Expenses by category - Pie chart (Screenshot #3)",
      "Expenses by category and by month - Pie chart (Screenshot #4)",
    ],
    projectScreenshots: [
      "expenseByMonthBarChart",
      "expensesByWeekBarChart",
      "expensesByCategoryBarChart",
      "monthlyExpensesByCategoryBarChart",
    ],
    frontend: true,
    backend: true,
    automatedTest: true,
  },
  {
    projectName: "Motivation Vault",
    projectSlug: "motivation-vault",
    projectRepoUrl: "https://github.com/manuel12/motivation-vault",
    projectLiveDemoUrl: false,
    projectTechnologies: [
      "html5",
      "css3",
      "javascript",
      "react",
      "cypress",
      "python",
      "django",
    ],
    projectImgSrc:
      "https://user-images.githubusercontent.com/4129325/221205796-109b3a7a-a102-46f0-b4f2-3711a883b5fe.png",
    projectMobileImgSrc:
      "https://user-images.githubusercontent.com/4129325/221207023-de613790-db09-4513-ae9e-ba893a575d54.png",
    projectDesc:
      "Motivation Vault is an application that hosts optimistic, inspiring, motivational and educational content.",
    projectDescContinued:
      "It allows user to create, read, update and delete resource of such content, along with adding comments and ratings to them.\
      The content is in the form of 4 types of 'resources',  which can be either books, podcasts, podcast episodes or motivational speech videos.<br>\
      Each of these resources will contain a title, a description,  an image(or video) and a 'values' section.\
      The values section is a list of points on things learned after consuming said resource. In the case of a book or podcast episode, for example,\
      you can see what was learned after reading the book or listening to the episode.<br>Users can also leave a rating or  add a  commnet on each\
      resource, this is achieved through authentication, so that users cannot leave more than 1 rating per resource and so that their names appear on the\
      comments.",
    projectFeatures: [
      "Detail page (Screenshot #1) ",
      "Rating section (Screenshot #2)",
      "Comment section (Screenshot #3)",
    ],
    projectScreenshots: ["detailpage", "ratingSection", "commentSection"],
    frontend: true,
    backend: true,
    automatedTest: true,
  },
  {
    projectName: "Media Ratings",
    projectRepoUrl: "https://github.com/manuel12/media-ratings",
    projectLiveDemoUrl: false,
    projectTechnologies: [
      "html5",
      "css3",
      "bootstrap",
      "javascript",
      "react",
      "cypress",
      "python",
      "django",
      ,
    ],
    projectImgSrc:
      "https://user-images.githubusercontent.com/4129325/221217865-d51a9f01-a1d1-438b-86b0-d85acd3d4351.png",
    projectMobileImgSrc:
      "https://user-images.githubusercontent.com/4129325/238203734-7074b91e-8a14-47e6-9307-51330714b22b.png",
    projectDesc:
      "Media Ratings is an application where you can search for the IMDb & Rotten Tomatoes ratings of your favorite series.",
    projectDescContinued:
      "The app visits the IMDb and Rotten Tomatoes  websites and uses their own search features to find out the series\
      you requested, then it parses  the score on each page and delivers it to you on a results page. It also creates a record of the searched series\
      on the database so the next time you search for it the result will be retrieved faster.",
    projectFeatures: [],
    projectScreenshots: [],
    frontend: true,
    backend: true,
    automatedTest: true,
  },
  {
    projectName: "MUI Landing Page",
    projectRepoUrl: "https://github.com/manuel12/mui-landing-page",
    projectLiveDemoUrl: "https://manuel12.github.io/mui-landing-page/",
    projectTechnologies: ["html5", "css3", "javascript", "react", "materialui"],
    projectImgSrc:
      "https://user-images.githubusercontent.com/4129325/230984164-8bcdccba-f995-4d89-b308-a6a0f59b32ea.png",
    projectMobileImgSrc:
      "https://user-images.githubusercontent.com/4129325/230983671-033238e0-22b7-4436-ae56-c7c34d0e3e43.png",
    projectDesc:
      "An example landing page for an italian pizzeria made with Material UI.",
    projectDescContinued:
      "There is no functionality on the page (except for scrolling when clicking on the navbar). \
      This app is purely to showcase my Material UI and landing page creation skills.",
    frontend: true,
    projectFeatures: [],
    projectScreenshots: [],
  },

  // {
  //   projectRepoUrl: "https://github.com/manuel12/custom-css-library",
  //   projectName: "Custom Library",
  //   projectImgSrc: "images/custom-library.png",
  // },
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
