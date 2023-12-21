import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { shotsdata } from "../data/ShotsData";

interface shotType {
  id: string;
  name: string;
  image: string;
  description: string;
}

const ProductList = () => {
  return (
    <div className="py-12 text-center">
      <h1 className=" text-4xl font-bold text-[#D41958]">Products We Make</h1>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {shotsdata.map((shot: shotType) => (
          <Card
            key={shot.id}
            className=" w-[280px] sm:w-[300px] lg:w-[350px] mx-auto"
          >
            <CardHeader className=" flex flex-row items-center gap-4">
              <Avatar className=" w-[50px] h-[50px]">
                <AvatarImage src={`images/${shot.image}`} />
                <AvatarFallback>{shot.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{shot.name}</CardTitle>
                <CardDescription>0.60 mm to 3.17 mm</CardDescription>
              </div>
            </CardHeader>
            <CardContent>{shot.description}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
