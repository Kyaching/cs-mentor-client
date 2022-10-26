import React from "react";

const Blog = () => {
  return (
    <div className="m-5">
      <div className="md:w-1/2 my-6 mx-auto p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
        <article>
          <h1 className="text-2xl font-bold">Q-1. What are cors?</h1>
          <p className="mt-4 dark:text-gray-400">
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </p>
        </article>
      </div>
      <div className="md:w-1/2 mx-auto p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
        <article>
          <h1 className="text-2xl font-bold">
            Q-2. Why are you using firebase? What other options do you have to
            implement authentication?
          </h1>
          <p className="my-4 dark:text-gray-400">
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more.Firebase Authentication integrates tightly with other Firebase
            services, and it leverages industry standards like OAuth 2.0 and
            OpenID Connect, so it can be easily integrated with your custom
            backend.
          </p>
          <p>TOP ALTERNATIVES TO FIREBASE AUTHENTICATION</p>
          <ol className="dark:text-gray-400">
            <li>1. Auth0</li>
            <li>2. Passport</li>
            <li>3. Keycloak</li>
            <li>4. MongoDB</li>
            <li>5. Okta</li>
            <li>6. JSON Web Token</li>
            <li>7. Amazon cognito</li>
          </ol>
        </article>
      </div>
      <div className="md:w-1/2 my-6 mx-auto p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
        <article>
          <h1 className="text-2xl font-bold">
            Q-3. How does the private route work?
          </h1>
          <p className="mt-4 dark:text-gray-400">
            Private Routes in React Router (also called Protected Routes)
            require a user being authorized to visit a route (read: page). So if
            a user is not authorized for a specific page, they cannot access it.
            The most common example is authentication in a React application
            where a user can only access the protected pages when they are
            authorized (which means in this case being authenticated).
            Authorization goes beyond authentication though. For example, a user
            can also have roles and permissions which give a user access to
            specific areas of the application.
          </p>
        </article>
      </div>
      <div className="md:w-1/2 my-6 mx-auto p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
        <article>
          <h1 className="text-2xl font-bold">
            Q-4. What is Node? How does Node work?
          </h1>
          <p className="mt-4 dark:text-gray-400">
            The Node.js run-time environment includes everything you need to
            execute a program written in JavaScript. As an asynchronous
            event-driven JavaScript runtime, Node.js is designed to build
            scalable network applications.
            <br />
            <br />
            <span>
              Node is completely event-driven. Basically the server consists of
              one thread processing one event after another. A new request
              coming in is one kind of event. The server starts processing it
              and when there is a blocking IO operation, it does not wait until
              it completes and instead registers a callback function. The server
              then immediately starts to process another event (maybe another
              request). When the IO operation is finished, that is another kind
              of event, and the server will process it (i.e. continue working on
              the request) by executing the callback as soon as it has time. So
              the server never needs to create additional threads or switch
              between threads, which means it has very little overhead. If you
              want to make full use of multiple hardware cores, you just start
              multiple instances of node.js
            </span>
          </p>
        </article>
      </div>
    </div>
  );
};

export default Blog;
