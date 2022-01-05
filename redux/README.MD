## Why do we need redux if we already have react context?

React Context has potential disadvantages

- You can have a very complex setup and managing state with react context. 
  - It depend on the kind of application that you’re building, for small and medium-sized application, that will very likely not be a problem. For enterprise level application with a lot of components and a lot of things going on, using React Context you can end up with code like this. 
  
  ```js
    <AuthenticationContextProvider>
      <ThemeContextProvider>
        <UIContextProvider>
          //...
          <App />
          //...
        </UIContextProvider>
      </ThemeContextProvider>
    </AuthenticationContextProvider>
  ```

  - Where you have a lot of different pieces of Context, a lot of different Context Provider components.

  - If you use just one big Context Provider component for managing the entire state of your application, that could lead in a large component which managing too many things and therefore itself become quite difficult to maintain and manage. You may end up  with a large context that cares about authentication, theming, user input, modal status and a lot of different things as well. So that could be a downside.

- Performance: React Context is not optimized for high-frequency state changes.