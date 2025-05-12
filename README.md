# Emporio - Financial Markets App

<div style="background-color: white; padding: 20px; display: inline-block; border-radius: 10px;">
  <img src="frontend/src/Components/Navbar/logo.png" alt="Emporio Logo">
</div>

*Modern Financial Analysis & Portfolio Management*

## Overview

Emporio is a comprehensive financial markets application that allows users to search for stocks, analyze company performance, and maintain a personalized investment portfolio. The platform provides detailed financial metrics, historical data visualization, and portfolio tracking in a user-friendly interface.

## Features

- **Stock Search & Discovery**: Find companies by name or ticker symbol with real-time data
- **Company Profiles**: Access comprehensive company information and key financial metrics
- **Financial Analysis**: View income statements, balance sheets, and cash flow statements
- **Portfolio Management**: Build and track your investment portfolio with personalized watchlists
- **User Authentication**: Secure account creation and login system
- **Interactive Comments**: Share insights and opinions on specific stocks

## Technology Stack

### Frontend
- **React 19** - Modern UI framework with hooks and functional components
- **TypeScript** - Type-safe JavaScript for improved developer experience
- **React Router** - Client-side routing and navigation
- **Axios** - HTTP client for API requests
- **React Hook Form** - Efficient form handling and validation
- **Yup** - Schema validation
- **TailwindCSS** - Utility-first CSS framework for custom styling
- **React Toastify** - Toast notifications
- **React Icons** - Icon library
- **React Spinners** - Loading indicators

### Backend
- **.NET 9** - Modern, high-performance server framework
- **ASP.NET Core Web API** - RESTful API development
- **Entity Framework Core** - ORM for database operations
- **SQL Server** - Relational database management system
- **Identity Framework** - User authentication and authorization
- **JWT Authentication** - Token-based security
- **Swagger/OpenAPI** - API documentation and testing
- **Repository Pattern** - Clean architecture implementation

### External APIs
- **Financial Modeling Prep API** - Financial data provider for stock information

## Getting Started

### Prerequisites

- Node.js (v16+)
- .NET SDK 9.0+
- SQL Server or SQL Server Express
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/finance_app.git
   cd Finance_app
   ```

2. **Set up the backend**
   ```bash
   cd api
   dotnet restore
   dotnet ef database update
   dotnet run
   ```
   The API will be available at `http://localhost:5165`

3. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   cp .env.example .env
   # Add your Financial Modeling Prep API key to the .env file
   npm start
   ```
   The app will be available at `http://localhost:3000`
Commit your changes (git commit -m 'Add some amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Financial Modeling Prep for providing financial data APIs
Tailwind CSS for the styling framework
React and .NET communities for documentation and support
