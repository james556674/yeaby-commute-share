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

const LoginWrapper = () => {
  return (
    <MainContainer>
      <Login />
    </MainContainer>
  )
}


const Login = () => {
  const localStorage = window.localStorage
  const navigate = useNavigate()
  const [mode, setMode] = useState("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const checkEmail = () => {

    if (mode === "password") {

      if (password === "yeabyAdmin") {
        localStorage.setItem("yeabyAdmin", "true")
        setMode("login")
        navigate("/")
      }
    }


    if (email === "yeabyAdmin") {
      setMode("password")
    } else {
      setMode("register")
    }
  }

  console.log("mode", mode)

  if (mode === "register") {
    return (
      <Card className="w-[350px]">
        <CardHeader
          className="flex flex-col items-start"
        >
          {/* <Avatar
            style={{
              width: "120px",
              height: "120px",
            }}
          >
            <AvatarImage

              src={YeabyCarLogo}
            />
          </Avatar> */}
          <CardTitle
            className="text-2xl"
            style={{
              letterSpacing: "1px",
            }}
          >
            帳號註冊(Register)
          </CardTitle>
          <CardDescription>
            填寫您的電子郵件以建立您的填寫
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">電子郵件</Label>
              <Input
                id="email"
                placeholder="yeaby@example.com"
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">密碼</Label>
              <Input id="password" type="password" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">確認密碼</Label>
              <Input id="password" type="password" />
            </div>

          </div>
        </CardContent>
        <CardFooter className="flex">
          <div className="w-full flex flex-col space-y-1 5">
            <Button
              className="w-full"
              onClick={() => {
                checkEmail()
              }}
            >
              建立帳號
            </Button>
            <div
              className="relative"
              style={{
                margin: "1rem 0",
              }}
            >
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  或使用以下方式註冊
                </span>
              </div>
            </div>
            <div
              className="third-regis-group flex space-x-2"
            >
              <Button
                className="w-full"
                variant="outline"
                onClick={() => {
                  checkEmail()
                }}
              >
                Google
              </Button>
              <Button
                className="w-full"
                variant="outline"
                onClick={() => {
                  checkEmail()
                }}
              >
                Apple
              </Button>
            </div>
          </div>
        </CardFooter>

      </Card>
    )
  }
  return (
    <Card className="w-[350px]">
      <CardHeader
        className="flex flex-col items-center"
      >
        <Avatar
          style={{
            width: "120px",
            height: "120px",
          }}
        >
          <AvatarImage

            src={YeabyCarLogo}
          />
        </Avatar>
        <CardTitle
          className="text-2xl"
          style={{
            letterSpacing: "1px",
          }}
        >
          YeabyCar
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">
              電子郵件
            </Label>
            <Input
              id="email"
              placeholder="yeaby@example.com"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          {mode === "password" && (
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">
                密碼
              </Label>
              <Input id="password" type="password" onChange={(e) => { setPassword(e.target.value) }} />
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex">
        <Button
          className="w-full"
          onClick={() => {
            checkEmail()
          }}
        >
          使用電子郵件登入
        </Button>
      </CardFooter>
    </Card>
  )
}

export default LoginWrapper