import { Home, Search, Bell, User } from "lucide-react"

export const links = [
  {
    label: "所有活動",
    href: "/activities",
  },
  {
    label: "尋找共乘",
    href: "/matching",
  }
]

const mobileIconSize = "h-7 w-7"

export const mobileFooterLinks = [
  {
    label: "首頁",
    href: "/activities",
    icon: (
      <Home className={mobileIconSize} />
    )
  },
  {
    label: "尋找",
    href: "/matching",
    icon: (
      <Search className={mobileIconSize} />
    )
  },
  {
    label: "通知",
    href: "/notifications",
    icon: (
      <Bell className={mobileIconSize} />
    )
  },
  {
    label: "帳戶",
    href: "/account",
    icon: (
      <User className={mobileIconSize} />
    )
  }
]

export const logout = ({
  localStorage,
  navigate
}) => {
  localStorage.removeItem("yeabyAdmin")
  navigate("/login")
}