"use client";
import axios from "axios";
import LoginContainer from "./LoginContainer";
import DashboardContainer from "./DashboardContainer";
import React, { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState<any>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("xxxx", formData);
    axios
      .post("http://192.168.25.122:8000/api/login", formData)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <LoginContainer
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          formData={formData}
        />
        <DashboardContainer />
      </div>
    </main>
  );
}
