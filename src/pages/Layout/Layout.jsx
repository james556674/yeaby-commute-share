import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Outlet, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import YeabyCarLogo from "../../../public/imgs/car.png"

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`


const Layout = () => {
  const localStorage = window.localStorage
  const navigate = useNavigate()
  console.log("Layout", localStorage.getItem("yeabyAdmin"))

  if (!localStorage.getItem("yeabyAdmin")) {
    console.log("redirect to login")
    window.location.href = "/login"
    return
  }

  return (
    <MainContainer>
      <Outlet/>
    </MainContainer>
  )
}

export default Layout