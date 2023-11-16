"use client";
import React from "react";
import { useSelector } from "@/lib/redux";

export default function Notification() {
  const notification = useSelector((state) => state.Ui.notification);
  if (notification !== null) {
    let notificationStatusClass;
    switch (notification.status) {
      case "pending":
        notificationStatusClass = "bg-yellow-400";
        break;
      case "success":
        notificationStatusClass = "bg-green-400";
        break;
      case "error":
        notificationStatusClass = "bg-red-400";
        break;
      default:
        notificationStatusClass = "bg-red-400";
    }
    return (
      <div
        className={`${notificationStatusClass} absolute bottom-0 right-0 mx-4 my-2 h-fit w-3/4 px-5 py-8 transition-all sm:w-2/4 lg:w-1/4`}
      >
        <h2 className="whitespace-nowrap text-lg font-semibold uppercase">
          {notification.title}
        </h2>
        <p className="line-clamp-2">{notification.message}</p>
      </div>
    );
  } else {
  }
}
