import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card"
import { dummyData } from "./util"

const Activities = () => {
  const isMobile = window.innerWidth < 768
  const hilightedActivities = dummyData?.filter((activity) => {
    return activity.tags.includes("精選活動")
  })
  const normalActivities = dummyData?.filter((activity) => {
    return !activity.tags.includes("精選活動")
  })
  return (
    <div
      className="h-full w-full"
      style={{
        overflow: "auto",
        display: "flex",
        aliginItems: "center",
        backgroundColor: "#f0f2f5",
        flexDirection: "column",
      }}
    >
      <div
        className="top-container w-full h-80"
        style={{
      
          position: "relative",
          height: "50%",
        }}
      >
        <Carousel
          style={{
            height: "100%",
            position: "relative",
            backfound: "red",
          }}
        >
          <CarouselContent
            style={{
              height: "100%",
            }}
          >
            {hilightedActivities.map((activity) => (
              <CarouselItem
                style={{
                  maxHeight: "300px",
                  backgroundColor: "#334155",
                }}
                key={activity?.activityId}
              >
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img className={`h-full ${isMobile ? "object-fill" : "object-contained"} `} src={activity.image} alt="" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            style={{
              top: "50%",
              left: "1rem",
              transform: "translateY(-50%)",
            }}
          />
          <CarouselNext 
            style={{
              top: "50%",
              right: "1rem",
              transform: "translateY(-50%)",
            }}
          />
        </Carousel>

      </div>
      <h1 className="text-2xl font-semibold pt-5 px-16">近期活動</h1>
      
      <div className="activities-section w-full flex justify-center px-16 pt-3">

        <Carousel className="w-full">
          <CarouselContent>
            {normalActivities.map((activity, index) => (
              <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div>
                  <Card>
                    <CardContent
                      className="max-h-40 p-0 h-32"
                    >
                      <img
                        style={{
                          borderRadius: "0.5rem",
                          objectFit: "contained",
                          width: "100%",
                          height: "100%",
                          
                        }}
                       src={activity?.image} 
                       alt="" 
                      />
                    </CardContent>
                  </Card>
                  <CardTitle className="pt-2 text-Sm font-semibold">{activity?.activityInfo}</CardTitle>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
      
    </div>
  )
}


export default Activities