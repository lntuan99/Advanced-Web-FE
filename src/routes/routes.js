import React from "react"
import { BrowserRouter } from "react-router-dom"
import LoginRoutes from "./LoginRoutes"
import HomeRoutes from "./HomeRoutes"
import RegisterRoutes from "./RegisterRoutes"
import AddClassRoutes from "./AddClassRoutes"
import DetailClassRoutes from "./DetailClassRoutes"
import ManageProfileRoutes from "./ManageProfile"

export default function Routes() {
  return (
    <BrowserRouter>
      <AddClassRoutes />
      <HomeRoutes />
      <LoginRoutes />
      <RegisterRoutes />
      <DetailClassRoutes/>
      <ManageProfileRoutes />
    </BrowserRouter>
  )
}
