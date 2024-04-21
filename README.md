# Netflix GPT
    - create-react-app
    - configured tailwind css -> https://tailwindcss.com/docs/guides/create-react-app

--- useRef - Lets you reference a value that is not needed for rendering - Login.js

--- Firebase setup
    - After successful setting up firebase in portal
    - npm install -g firebase-tools
    - run firebase login - it should show your mail id
    - firebase init
    - npm run build - To build the project and asking firebase to deploy
    - firebase deploy - https://netflixgpt-a0d7c.web.app

--- Why console is happening two time in browser? 
    - Because of <React.StrictMode></React.StrictMode> in index.js and it is defaultly given to us bt create-react-app
    - It logs more than once only in local but not in production
    - Also, react renders for extra rendering to maintain consistency. So it is logging more than once

--- Early return - returning null or something before it renders which actually breaks the page

--- https://platform.openai.com/ -> under profile -> API keys
    - npm openai

--- Default behavior of a form is to submit and refreshes the page 

--- Memoization - If data is already in the store then we will not make an api call again to fetch, instead use the store data
                - check useNowPlayingMovies.js - LINE - 9 and useeffect()