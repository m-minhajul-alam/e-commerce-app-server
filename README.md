# E-Commerce API

This is an E-Commerce API built with Express, TypeScript, MongoDB, and Mongoose. The project follows a modular pattern and includes endpoints for managing products and orders, with data validation using Joi.

## Features

- Create, read, update, and delete products
- Create, read, and search orders
- Data validation using Joi
- Modular project structure

## Requirements

- Node.js
- MongoDB

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/m-minhajul-alam/e-commerce-app-server.git
   cd e-commerce-app-server
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory and add your MongoDB connection string and port:

   ```plaintext
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Compile TypeScript code**:

   ```bash
   npx tsc
   ```

## Running the Application

1. **Start the server**:

   ```bash
   node dist/server.js
   ```

   For development, you can use `nodemon` to automatically restart the server on code changes:

   ```bash
   npm run dev
   ```

2. **Check the server logs** to ensure it's running and connected to MongoDB successfully:

   ```plaintext
   Server running on port 5000
   MongoDB connected
   ```

## API Endpoints

### Product Management

#### Create a New Product

- **Endpoint**: `/api/products`
- **Method**: `POST`
- **Sample Request Body**:

  ```json
  {
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
      {
        "type": "Color",
        "value": "Midnight Blue"
      },
      {
        "type": "Storage Capacity",
        "value": "256GB"
      }
    ],
    "inventory": {
      "quantity": 50,
      "inStock": true
    }
  }
  ```

- **Sample Response**:

  ```json
  {
    "success": true,
    "message": "Product created successfully!",
    "data": {
      "name": "iPhone 13",
      "description": "A sleek and powerful smartphone with cutting-edge features.",
      "price": 999,
      "category": "Electronics",
      "tags": ["smartphone", "Apple", "iOS"],
      "variants": [
        {
          "type": "Color",
          "value": "Midnight Blue"
        },
        {
          "type": "Storage Capacity",
          "value": "256GB"
        }
      ],
      "inventory": {
        "quantity": 50,
        "inStock": true
      }
    }
  }
  ```

#### Retrieve a List of All Products

- **Endpoint**: `/api/products`
- **Method**: `GET`
- **Sample Response**:

  ```json
  {
    "success": true,
    "message": "Products fetched successfully!",
    "data": [
      {
        "name": "iPhone 13",
        "description": "A sleek and powerful smartphone with cutting-edge features.",
        "price": 999,
        "category": "Electronics",
        "tags": ["smartphone", "Apple", "iOS"],
        "variants": [
          {
            "type": "Color",
            "value": "Midnight Blue"
          },
          {
            "type": "Storage Capacity",
            "value": "256GB"
          }
        ],
        "inventory": {
          "quantity": 50,
          "inStock": true
        }
      }
      // Additional products...
    ]
  }
  ```

#### Retrieve a Specific Product by ID

- **Endpoint**: `/api/products/:productId`
- **Method**: `GET`
- **Sample Response**:

  ```json
  {
    "success": true,
    "message": "Product fetched successfully!",
    "data": {
      "name": "iPhone 13",
      "description": "A sleek and powerful smartphone with cutting-edge features.",
      "price": 999,
      "category": "Electronics",
      "tags": ["smartphone", "Apple", "iOS"],
      "variants": [
        {
          "type": "Color",
          "value": "Midnight Blue"
        },
        {
          "type": "Storage Capacity",
          "value": "256GB"
        }
      ],
      "inventory": {
        "quantity": 50,
        "inStock": true
      }
    }
  }
  ```

#### Update Product Information

- **Endpoint**: `/api/products/:productId`
- **Method**: `PUT`
- **Sample Request Body**:

  ```json
  {
    "name": "iPhone 13",
    "description": "A sleek and powerful smartphone with cutting-edge features.",
    "price": 999,
    "category": "Electronics",
    "tags": ["smartphone", "Apple", "iOS"],
    "variants": [
      {
        "type": "Color",
        "value": "Midnight Blue"
      },
      {
        "type": "Storage Capacity",
        "value": "256GB"
      }
    ],
    "inventory": {
      "quantity": 50,
      "inStock": true
    }
  }
  ```

- **Sample Response**:

  ```json
  {
    "success": true,
    "message": "Product updated successfully!",
    "data": {
      "name": "iPhone 13",
      "description": "A sleek and powerful smartphone with cutting-edge features.",
      "price": 999,
      "category": "Electronics",
      "tags": ["smartphone", "Apple", "iOS"],
      "variants": [
        {
          "type": "Color",
          "value": "Midnight Blue"
        },
        {
          "type": "Storage Capacity",
          "value": "256GB"
        }
      ],
      "inventory": {
        "quantity": 49,
        "inStock": true
      }
    }
  }
  ```

#### Delete a Product

- **Endpoint**: `/api/products/:productId`
- **Method**: `DELETE`
- **Sample Response**:

  ```json
  {
    "success": true,
    "message": "Product deleted successfully!",
    "data": null
  }
  ```

### Order Management

#### Create a New Order

- **Endpoint**: `/api/orders`
- **Method**: `POST`
- **Sample Request Body**:

  ```json
  {
    "email": "level2@programming-hero.com",
    "productId": "productId_here",
    "price": 999,
    "quantity": 1
  }
  ```

- **Sample Response**:

  ```json
  {
    "success": true,
    "message": "Order created successfully!",
    "data": {
      "email": "level2@programming-hero.com",
      "productId": "productId_here",
      "price": 999,
      "quantity": 1
    }
  }
  ```

#### Retrieve All Orders

- **Endpoint**: `/api/orders`
- **Method**: `GET`
- **Sample Response**:

  ```json
  {
    "success": true,
    "message": "Orders fetched successfully!",
    "data": [
      {
        "email": "level2@programming-hero.com",
        "productId": "productId_here",
        "price": 999,
        "quantity": 1
      }
      // more orders...
    ]
  }
  ```

#### Retrieve Orders by User Email

- **Endpoint**: `/api/orders?email=level2@programming-hero.com`
- **Method**: `GET`
- **Sample Response**:

  ```json
  {
    "success": true,
    "message": "Orders fetched successfully for user email!",
    "data": [
      {
        "email": "level2@programming-hero.com",
        "productId": "productId_here",
        "price": 999,
        "quantity": 1
      }
      // more orders for the user...
    ]
  }
  ```

## Contributing

Feel free to submit issues or pull requests.

## License

This project is licensed under the MIT License.
