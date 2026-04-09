import { useState } from "react";
import Creation from "./Pages/Creation";
import Posts from "./Pages/Posts";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <Creation/>
      <Posts/>
      
    </div>
  );
}