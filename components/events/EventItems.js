import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Skeleton } from "@mui/material";
// icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function EventsItems({ data }) {
  // custom formats
  const dateFormat = new Date(data.date).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressFormat = data.location.replace(", ", "\n");
  const exploreEventLink = `/events/${data.id}`;

  return (
    <div>
      <Box sx={{ width: "290px", margin: "40px 0" }}>
        {data ? (
          <Card>
            <CardMedia component="div">
              {data.image ? (
                <Image
                  src={`/${data.image}`}
                  alt={data.title}
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              ) : (
                <Skeleton
                  variant="rectangular"
                  width={"250px"}
                  height={"250px"}
                  sx={{ bgcolor: "grey.900" }}
                />
              )}
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="address"
              >
                <LocationOnIcon sx={{ fontSize: 20 }} />
                {addressFormat}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="time"
                className="fw-bold"
              >
                <AccessTimeFilledIcon
                  sx={{ fontSize: 17, margin: "0 14px 0 2px" }}
                />
                {dateFormat}
              </Typography>
            </CardContent>
            <CardActions className="m-2">
              <Link href={exploreEventLink}>
                <Button
                  size="small"
                  variant="contained"
                  endIcon={<ArrowForwardIosIcon />}
                >
                  Explore Events
                </Button>
              </Link>
            </CardActions>
          </Card>
        ) : (
          <Skeleton
            variant="rectangular"
            width={"250px"}
            height={"250px"}
            sx={{ bgcolor: "grey.900" }}
          />
        )}
      </Box>
    </div>
  );
}
