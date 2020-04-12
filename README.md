# nextjs-example

This is a simple project built using the nextjs framework. It has been used as an example to explain some of the relevant features that come within the framework. These features are:
* File based routing system
* API routes
* Server Side Rendering (Isomorphic rendering)

There are more features of which a code example was not developed, like the nextjs 'Head' Component, or the AMP support.


File based routing system
-------------------------
This example shows the file-system based routing mechanism that nextjs incorporates. This routing mechanism automatically assings a route to files contained in the 'pages' directory. Commonly, the name assigned to the route is the same as the file name. There is an exception to this rule. If the name of the file is just 'index.js', the route asigned to the route will be just '/'. For example, a file contained within the directory 'pages/portfolio/index.js' will be available in the route '/portfolio/'. We can also find examples of dynamic routes based on files and how can we extract the url parameters using nextjs.


API Routes example
-------------------------
Here we can find an example of the nextjs way to easily build an API. As in the case of the routes, this is also a file-based system. All the files located in the 'pages/api' directory will be treated as an API endpoint, instead of a common page. These API andpoints could be also dinamical. In these example we can observe how handle an API request and how to build an apropiate response.



Rendering types example.
-------------------------
This example tries to show the three types of rendering mechanisms that could be used to render a web page:
1. Server Side Rendering. The whole page is constructed in the server. The way to navigate within the diferent paths is by using traditional anchor (<a>) html tags. This is how the web has worked in its beginnings. With this strategy, accessing to a web route can be slow because the server must build the page entirely before the browser could shown it. However, SEO is improved by using this rendering mechanism.

2. Client Side Rendering. The whole application '.js' code is sent to the browser in the first request. After that the browser is in charge of mounting the interface and obtainig the data required, by requisting it to an API, for example. When this process finishes, the whole application is available at the client. The user can navigate between the diferent web application by using special routing component, with no need to request interface information (html or js) to a server. The routing is performed by using special components which work very similar to anchor tag, but only in the client side. This components only checks what file is associated to a determined route and render it. Nextjs framework uses the '<Link>' component in order to do this.

3. Isomorphic rendering. This kind of rendering is a combination of the 2 previous rendering strategies. During the first render the whole page is constructed in the server, but at the same time, all the '.js' code necessary to navigate through the whole application is sent to the the browser. In later renderings, when the user navigates across the platform, the browser itself builds the different views asociated to the different paths. In this example we can observe how nextjs handles Isomorphic rendering by its 'getInitialProps' lifecycle. During the first render this method is executed in server side, but lately it will be executed in the browser itself


Code Splitting
-------------------------
Code splitting is a rendering strategy where the JavaScript is split into smaller chunks. This enables sending the minimal code required to provide value upfront, improving page-load times. The rest can be loaded on demand. In this example we can observe how nextjs automatically split the '.js' content based on the pages, that is, each page corresponds to one of these chuncks. When a page is requested, the server sends its code, and then, the browser assembles all fragments.


# Usage

1. First of all, clone the repository in the desired directory.
```console
foo@bar:~$ git clone https://github.com/iker-pc/nextjs-example.git
```

2. Access to the project root folder
```console
foo@bar:~$ cd nextjs-example
```

3. Install all the project dependencies
```console
foo@bar:~$ npm install
```

4. Build the project and serve it.
```console
foo@bar:~$ npm run build && npm run start
```

The application will be served in port 3000.




