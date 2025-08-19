"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const Point = ({ text, type }: { text: string; type: "good" | "bad" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: type === "good" ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className={`flex items-start gap-2 p-2 rounded-lg shadow-sm ${
        type === "good" ? "bg-green-50" : "bg-red-50"
      }`}
    >
      {type === "good" ? (
        <CheckCircle className="text-green-600 w-4 h-4 mt-1" />
      ) : (
        <XCircle className="text-red-600 w-4 h-4 mt-1" />
      )}
      <p className="text-sm text-gray-700">{text}</p>
    </motion.div>
  );
};

const DifferenceTabs = () => {
  return (
    <div className="w-full md:w-[500px]">
      <Tabs defaultValue="cut-wire-steel-shots" className="w-full">
        
        <TabsList className="flex justify-around bg-gray-100 rounded-lg p-2 mb-4 shadow-sm">
          <TabsTrigger
            value="cast-steel-shots"
            className="px-4 py-2 rounded-md data-[state=active]:bg-red-600 data-[state=active]:text-white"
          >
            Cast Steel Shots
          </TabsTrigger>
          <TabsTrigger
            value="cut-wire-steel-shots"
            className="px-4 py-2 rounded-md data-[state=active]:bg-green-600 data-[state=active]:text-white"
          >
            Cut Wire Steel Shots
          </TabsTrigger>
        </TabsList>

        
        <TabsContent value="cast-steel-shots" className="flex flex-col gap-2">
          <Point text="Basic raw material has lower physical properties & composition" type="bad" />
          <Point text="Blow holes, porosity & shrinkage cause breakage" type="bad" />
          <Point text="Grain size is unstabilized" type="bad" />
          <Point text="Hardness variation is large" type="bad" />
          <Point text="Shots break into dust, short lifespan" type="bad" />
          <Point text="Higher consumption → more cost & inventory" type="bad" />
          <Point text="Inconsistent performance due to deterioration" type="bad" />
          <Point text="Lower purchase price (but costly in long run)" type="good" />
        </TabsContent>

        
        <TabsContent value="cut-wire-steel-shots" className="flex flex-col gap-2">
          <Point text="Raw material is defect-free (no holes/porosity)" type="good" />
          <Point text="Grain size stabilized due to drawing process" type="good" />
          <Point text="All shots are identical & uniform hardness" type="good" />
          <Point text="Micro-structure: only tempered martensite" type="good" />
          <Point text="Only wear down, not break into dust" type="good" />
          <Point text="Less consumption → lower inventory cost" type="good" />
          <Point text="Consistent performance" type="good" />
          <Point text="2–3x longer lifespan" type="good" />
          <Point text="Higher purchase price (but economical in long run)" type="bad" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DifferenceTabs;
