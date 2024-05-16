# AltSchool-Frontend-Engineering-Assesment
### Showcasing My GitHub Repositories
This is a solution to the AltSchool Frontend Engineering Intermediate Module Assesment

### Table of Contents
* Overview
    - [The Questions](#the-questions)
    - [Technologies used](#technologies-used)

* Development
    - [Installation](#installation)
    - [Routes](#routes)
    - [API fetch](#api-fetch) 
    - [Components](#components)

* [Deployment](#deployment)
* [Challenges](#challenges)
* [Knowledge gained](#knowledge-gained)
* [Acknowledgement](#acknowledgement)

## The Questions
Implement a Web App using GitHub API to fetch your GitHub repositories portfolio.

1. Show a page listing all your repositories on GitHub with pagination enabled 20mks. Bonus: Implement Search and Filter. 
2. Create another page showing data for a single repo when clicked from the page. Show all repos using nested routes while using all the necessary tools in React. 10mks
3. Implement an Error Boundary (show a page to test the error boundary) 5mks
4. a 404 page  (show a page to test the 404 page). 5mks
5. Good Layout, UI, and Designs are essential. Accessibility techniques taught in semester one are Important. 10mks

* BONUS: Provide a button to Create a new repo using a Modal, allow a way to update some details of the created repo, and finally add a way to delete the repo. Instructors Award of Recognition ????.

## Technologies used
This project was built with
* Semantic HTML5 Markup
* Vanilla CSS
* Flexbox
* [Vite + React](https://vitejs.dev/)
* [React icons](https://react-icons.github.io/react-icons/)
* [React router](https://reactrouter.com/en/main/routers/picking-a-router)
* Axios
## Installation
I started by installing Vite `npm install vite@latest` and using React as the framework for my app and deleted some unwanted styles and files from my app. I created Components folder for my Navbar, Buttons, Pagination and other various utilities. 

I installed and imported the necessary tools & icons for building my Components and exported the Components to their various routes to render in the `App`.

## Routes
The `createBrowserRouter` is recommended for all React router web projects and the `react-router-dom` needs to be used (imported it). So I used it to import the pages layout and details for the home-page, single-repo, and error pages using the `router` variable which will contain the route and paths to those pages. 

I implemented the error page using `useRouteError` from the `react-router-dom` in a route I named `ErrorPage`, I also rendered the `Outlet` layout from the `react-router` which renders the details in all pages apart from the Navbar.

I used the `App.jsx` file instead of `main.jsx` file to convey these code(routes), importing every routes and pages that renders the app.

Preview of the `App.jsx` file:
```
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import HomePage from "./routes/HomePage";
import ErrorPage from "./ErrorPage";
import SingleRepo from "./routes/SingleRepo";
import ErrorRepo from "./routes/ErrorRepo";


export default function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/:name',
          element: <SingleRepo />
        },
        {
          path: '/ErrorRepo',
          element: <ErrorRepo />
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}
```

The `Outlet` Layout:
```
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
```

## API fetch
I npm installed `axios` and imported it for my GitHub repos API. The `useEffect` hook was used to serve as a container for the data that is fetched from the API, the `useState` hook was used to initiate a page loader which was set to `false` and `true` during the repo fetch and `false` after the data is fetched. I have also repeated this functions for my `SingleRepo` route using the `name` parameter to fetch only one particular repo and to navigate to the `ErrorRepo` page if there are name errors or when nothing is found.

https://api.github.com/users/[yourusername]/repos is the URL for your repository `CRUD` operations. To find your own GitHub repos, you can use this URL on the [Postman](https://web.postman.co/) platform and replace "yourusername" with your GitHub username.

The code in the `Home` route is shown below:
```
useEffect(() => {
        (() => {
            setLoading(true);
            axios
                .get("https://api.github.com/users/godswillnwabu/repos", {
                    headers: {
                        Authorization:
                            "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",
                    },
                })
                .then((response) => {
                    setRepos(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    alert("error fetching data:" + error);
                });
        })();
    }, []);
```

## Components
Many components were created to enhance easy navigation of the app, from the paginations to the modal button, and the toggler button which aids for better ui/ux experiences. The black and white switch exhibits from the styling I have made to the `root:` selector for both background and fonts in the pages, Do you prefer white or black background? I knew you can't deal without both :smiley:

Coming to the `Repo.jsx`, I imported `useNavigate` from the `react-router` to navigate to any repository I click on using the `handleClick` function. 

Code Preview:
```
import { useNavigate } from "react-router";

const navigate = useNavigate();

const handleClick = (name) => {
    navigate(name);
};
```

From the `return` function I mapped all repository and included the `onClick` function to each repository to display and `navigate` them to the `SingleRepo.jsx` route when clicked.


## Deployment
I deployed my project with [Vercel](https://vercel.com/), a cloud platform that enables developers to host static websites and web services with zero configuration.
1. Create an account on [Vercel](https://vercel.com/) and import the project into Vercel using the [import flow](https://vercel.com/import/git). 
2. After your project has been imported, all subsequent pushes to branches will generate a preview of previous deployments, and all changes made to the production branch will result in a production deployment.
3. Once deployed, you will get a URL to see your app live.

+ Make sure your project code have been pushed to a Git repository with a production branch (commonly "master" or "main").


## Challenges
I encountered some challenges that delayed my project for weeks before resolving them. I wish you could clone `git clone` this project and recreate yours :superhero_man:
* GitHub authenticator always rejects my code pushes to a GitHub repository because of the `personal access token` I generated for my repos. 
* I finded it difficult to deploy my Vite+React app on Vercel not until I had to recreate my app in `create-react-app`.
* I had a little hiccups with writing the `pagination` code and the problem of the page navigations but all these were solved in a short while.

## Knowledge gained
1. This project has led me to understand more about API's integration and how to use them, I made use of [Postman](https://www.postman.com/) an API platform for API uses.
2. The latest version of the React router is quite easy and simple to handle.
3. It was actually the first time I deployed my Vite-React app on `gh-pages`.
4. And also the first time I used my github `personal access tokens` for github passwords & authentications.

## Acknowledgement
I got my inspiration and method from these two wonderful URLs: :clap:
- [How I Implemented an API fetch of my GitHub](https://blog.devgenius.io/how-i-implemented-an-api-fetch-of-my-github-53b2234dfc51)
- [https://kehindegithubportfolio.netlify.app/](https://kehindegithubportfolio.netlify.app/)

#### Feel free to contact me [here](https://www.linkedin.com/in/godswillnwabu) :phone:

