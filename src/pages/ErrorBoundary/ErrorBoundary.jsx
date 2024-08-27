import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { useNavigate } from "react-router-dom"
import YeabyCarLogo from "../../../public/imgs/car.png"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"


const ErrorBoundary = () => {
  const navigate = useNavigate()
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Card className="w-[350px]" style={{ textAlign: "center" }}>
        <Avatar
          style={{
            width: "120px",
            height: "120px",
            margin: "0 auto",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/activities")
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

export default ErrorBoundary