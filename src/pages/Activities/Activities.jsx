import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { useNavigate } from "react-router-dom"
import YeabyCarLogo from "../../../public/imgs/car.png"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"


const Activities = () => {
  const localStorage = window.localStorage
  const navigate = useNavigate()
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card className="w-[350px]" style={{textAlign: "center"}}>
        <Avatar
          style={{
            width: "120px",
            height: "120px",
            margin: "0 auto",
            cursor: "pointer",
          }}
          onClick={() => {
            localStorage.removeItem("yeabyAdmin")
            navigate("/login") 
          }}
        >
          <AvatarImage

            src={YeabyCarLogo}
          />
        </Avatar>
        <CardHeader>
          活動首頁
        </CardHeader>
        <CardContent>
          Working in progress
        </CardContent>
        <CardFooter className="flex justify-between">
        </CardFooter>
      </Card>
    </div>
  )
}

export default Activities