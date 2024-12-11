# Scratch - E-Commerce Website

Scratch is a full-stack e-commerce website designed for seamless online shopping. It features user authentication, product management, and an intuitive interface. Built with Node.js, Express, MongoDB, and EJS templates, it follows a modular architecture for easy scalability and maintenance.

## Features

- **User Management**: Sign up, log in, and manage user sessions.
- **Product Listings**: View and manage product details.
- **Admin Panel**: Manage to add more items/products.
- **Cart Functionality**: Add and manage items in your cart.
- **Token-based Authentication**: Secure user sessions with JWT.
- **File Uploads**: Upload images for products using Multer.


## Installation

1. Clone the repository

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and add the following variables:

   ```env
   PORT=3000
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-jwt-secret
   ```

4. Start the application:

   ```bash
   npm start
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

- **Landing Page**: Browse products.
- **Cart**: Add items and proceed to checkout.
- **Admin Panel**: Manage creation of new product.

## Dependencies

- **Backend**:
  - Node.js
  - Express
  - MongoDB (Mongoose)
- **Authentication**:
  - JSON Web Tokens (JWT)
- **File Upload**:
  - Multer
- **Frontend**:
  - EJS Templates

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any feature suggestions or bug fixes.
