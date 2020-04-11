# nextjs-example

This is a simple project built using the nextjs framework. It has been used as an example to explain some of the relevant features that come within the framework. These features are:
* File based routing system
* API routes
* Server Side Rendering (Isomorphic rendering)


File based routing system
-------------------------
This example shows an example of the file-system based router that nextjs incorporates. This routing mechanism automatically assings a route to files contained in the 'pages' directory. Commonly, the name assigned to the route is the same as the file name. There is an exception to this rule. If the name of the file is just 'index.js', the route asigned to the route will be just '/'. For example, a file contained within the directory 'pages/portfolio/index.js' will be available in the route '/portfolio/'. We can also find examples of dynamic routes based on files and how can we extract the url parameters using nextjs.


API Routes example
-------------------------
Here we can find an example of the nextjs way to easily build an API. As in the case of the routes, this is also a file-based system. All the files located in the 'pages/api' directory will be treated as an API endpoint, instead of a common page. These API andpoints could be also dinamical. In these example we can observe how handle an API request and how to build an apropiate response.



Rendering types example.
-------------------------
This example tries to show the three types of rendering mechanisms that could be used to render a web page:
1. Server Side Rendering. The whole page is constructed in the server. The way to navigate within the diferent paths is by using traditional anchor (<a>) html tags. This is how the web has worked in its beginnings. With this strategy, accessing to a web route can be slow because the server must build the page entirely before the browser could shown it. However, SEO is improved by using this rendering mechanism.

2. Client Side Rendering. The whole application '.js' code is sent to the browser in the first request. After that the browser is in charge of mounting the interface and obtainig the data required, by requisting it to an API, for example. When this process finishes, the whole application is available at the client. The user can navigate between the diferent web application by using special routing component, with no need to request interface information (html or js) to a server. The routing is performed by using special components which work very similar to anchor tag, but only in the client side. This components only checks what file is associated to a determined route and render it. Nextjs framework uses the '<Link>' component in order to do this.

3. Isomorphic rendering. //todo

