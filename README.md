GadgetHeaven ✨

Welcome to GadgetHeaven, your go-to destination for the latest and greatest gadgets. This e-commerce platform provides an engaging shopping experience with advanced features such as product categorization, cart management, wishlist functionality, and more.

Features

Home Page

Dynamic banner

Sidebar categories

Gadgets displayed in a grid format

Product Categories

Filter gadgets by categories such as Computers, Phones, and Smart Watches

Details Page

View detailed information about each gadget, including images, specifications, and availability

Shopping Cart

Manage cart items, view total price, and sort items by price

Wishlist

Add gadgets to your wishlist and avoid duplicates

React Concepts Used

React Router DOM: For managing multiple pages and routes

React Hooks: Utilized hooks such as useState, useEffect, useLocation, and useNavigate

Context API: Centralized state management for cart and wishlist

Toast Notifications: Display alerts for adding items to cart or wishlist

Data Handling & Management

Context API: Used for managing cart and wishlist state

LocalStorage: Data persistence across reloads for cart and wishlist

Pages & Functionalities

1. Home Page

Banner Section: An attractive banner with a button redirecting to the dashboard

Categories Sidebar: Displays categories such as Computers, Phones, and Smart Watches

Gadget Cards: Grid layout showing gadgets with their image, price, and a "Details" button

2. Details Page

Displays gadget-specific information such as name, price, specifications, and availability

Includes "Add to Cart" and "Wishlist" buttons

Wishlist button becomes disabled after the first click

3. Dashboard Page

Contains two tabs: Cart and Wishlist

Cart: Displays cart items with sorting functionality

Wishlist: Displays wishlist items with an option to move them to the cart

4. Statistics Page

Composed Chart showcasing Price vs. Product Name with scatter data based on rating

5. 404 Page

Displays an error message for invalid routes

Key Features

Dynamic page titles using react-helmet-async

Toast notifications for successful cart and wishlist actions

Persistent state management with Context API and LocalStorage

Conditional rendering and category-based filtering

Smooth navigation with useNavigate() hook

Installation

Clone the repository:

git clone [repo-link]

Navigate to the project directory:

cd GadgetHeaven

Install dependencies:

npm install

Run the development server:

npm start

Usage Instructions

Navigate through different product categories

Add gadgets to your cart or wishlist

View and manage cart and wishlist items on the dashboard

Explore product details and statistics

Toast Notifications

Cart Addition: Shows a success message when an item is added to the cart

Wishlist Addition: Displays a separate success message for wishlist additions

Additional Features

Responsive Design: Mobile-friendly layout

Data Validation: Prevents duplicate additions to the wishlist

Price Sorting: Sort cart items in descending price order

Purchase Modal: Shows a congratulatory modal upon successful purchase

Resources & References

react-helmet-async

Recharts Composed Chart

React Toastify

Challenges & Solutions

Dynamic Background Colors: Used useLocation() to apply different background colors for the home and other pages

Cart Price Limit: Restricted cart total to $1000 using validation logic

Modal Navigation: Used useNavigate() for post-purchase redirection without page reload

Thank you for exploring GadgetHeaven! Enjoy your gadget shopping experience.

