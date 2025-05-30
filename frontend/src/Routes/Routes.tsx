import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import App from "../App";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import DesignPage from "../Pages/DesignPage/DesignPage";
import BalanceSheet from "../Components/BalanceSheet/BalanceSheet";
import CashFlow from "../Components/CashFlow/CashFlow";
import Error404 from "../Pages/Error404/Error404";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
errorElement: <Error404 />,
        children: [
            {
                path: "", 
                element: <HomePage />
            },
            {
                path: "login",
                element: <LoginPage/>
            },
            {
                path: "register",
                element: <RegisterPage />
            },
            {
                path: "search", 
                element: <ProtectedRoute><SearchPage /></ProtectedRoute>
            },
            {
                path: "design-guide",
                element: <DesignPage />
            },
            {
                path: "company/:ticker", 
                element: <ProtectedRoute><CompanyPage /></ProtectedRoute>, 
                children: [
                    {
                        path: "company-profile",
                        element: <CompanyProfile />
                    },
                    {
                        path: "income-statement",
                        element: <IncomeStatement />
                    },                    
                    {
                        path: "balance-sheet",
                        element: <BalanceSheet />
                    },
                    {
                        path: "cash-flow",
                        element: <CashFlow />
                    },
                ]
            },
        ]
    }
])