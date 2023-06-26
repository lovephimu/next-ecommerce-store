# Documentation for yesTent Ecommerce Store

## Introduction

yesTent is an ecommerce store built using Next.js, a popular framework for server-rendered React applications. This documentation provides an overview of the techniques and technologies used in the development of the yesTent project. It covers various aspects such as the database management, server and client-side handling, cookies usage, styling, testing, deployment, and other notable features.

## Technologies and Techniques Used

1. Database Management

   - Postgres
   - Migrations
   - SQL Queries
     - SQL queries were utilized to interact with the Postgres database and perform operations such as retrieving, updating, and deleting product information.

2. Product Data Structure

   - The "products" table in the database consists of the following columns:
     - id: Unique identifier for each product.
     - name: Name of the product.
     - price: Price of the product.
     - product description: Description of the product.

3. Server-Side and Client-Side Rendering

   - Next.js
   - Server-Side Pages
   - Client-Side Pages
   - Dynamic Routing
     - Dynamic routing was utilized in yesTent to create templates for product pages that are dynamically generated on demand. This allows for a flexible and scalable approach to display individual product details.
   - React Hooks
     - React hooks, such as useState and useEffect, were used in client-side pages to manage state and perform side effects. For example, the use of hooks in the checkout form component to handle form validation and submission.

4. Cookies

   - Cookies were extensively used in yesTent to store and display items in the user's basket. They allowed for persistent cart data and facilitated the management of selected quantities for each product.

5. Styling

   - SCSS Modules: SCSS modules were utilized for styling the pages of yesTent. This modular approach enables scoped and reusable styles, reducing the chances of style conflicts.

6. Testing

   - Jest and Playwright: Jest, a JavaScript testing framework, and Playwright, a browser automation library, were employed to create tests for yesTent. These tests ensure the correctness of functions and validate user flows within the application.

7. TypeScript

   - TypeScript, a superset of JavaScript, was used in yesTent to enhance the robustness of the codebase. TypeScript provides static typing, which helps catch potential errors during development and improves code maintainability.

8. Deployment

   - Fly.io and Docker: yesTent was deployed on the Fly.io platform using Docker. Docker allowed for the creation of containerized applications with all the necessary dependencies, while Fly.io provided a scalable and reliable hosting solution.

9. Digitally Hand-Drawn Images

   - yesTent utilized digitally hand-drawn images of tents and their usage. These custom illustrations contribute to the unique visual identity of the ecommerce store.

10. Checkout Form
    - A checkout form component in yesTent serves as an example of using React hooks. It utilizes hooks like useState to manage form state, useEffect to handle form validation, and conditional rendering based on the presence of products in the basket.

## Conclusion

The yesTent ecommerce store is built using various technologies and techniques to provide a robust and user-friendly shopping experience. By utilizing Next.js, Postgres, migrations, SQL queries, cookies, SCSS modules, Jest, Playwright, TypeScript, Docker, and Fly.io, the application offers seamless navigation, efficient data management, reliable testing, and scalable deployment. The integration of hand-drawn images further enhance the overall user experience.
