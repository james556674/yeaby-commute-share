import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { logout } from "../Layout/util"


const Account = () => {
  const localStorage = window.localStorage
  const navigate = useNavigate()
  return (
    <div
      className="h-full w-full"
      style={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Button 
        variant="outline"
        onClick={() => {
          logout({
            localStorage,
            navigate
          })
        }}
      >
        Log out
      </Button>
    </div>
  )
}

export default Account