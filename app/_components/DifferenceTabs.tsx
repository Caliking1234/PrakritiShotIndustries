import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DifferenceTabs = () => {
  return (
    <div>
      <Tabs defaultValue="cut-wire-steel-shots" className="w-[400px]">
        <TabsList className=" bg-gray-300 py-2 w-full">
          <TabsTrigger value="cast-steel-shots" className="">
            Cast Steel Shots{" "}
          </TabsTrigger>
          <TabsTrigger value="cut-wire-steel-shots" className="">
            Cut Wire Steel Shots{" "}
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="cast-steel-shots"
          className=" flex flex-col gap-y-2"
        >
          <p className="text-sm text-[#576983] p-2 bg-white rounded-sm">
            Basic row material is far lower in physical properties &
            composition. This cause BLOW HOLES, POROSITY & SHRINKAGE, which
            makes the shot, fracture into small particles.{" "}
          </p>
          <p className="text-sm text-[#576983] p-2 bg-white rounded-sm">
            Grain size of cast shot is Unstabilized
          </p>
          <p className="text-sm text-[#576983] p-2 bg-white rounded-sm">
            Shots being produced are of mixed size, hence product is a mix of
            various spherical sizes
          </p>
          <p className="text-sm text-[#576983] p-2 bg-white rounded-sm">
            Hardness Variation is large
          </p>
          <p className="text-sm text-[#576983] p-2 bg-white rounded-sm">
            In Micro-structure carbide always there
          </p>
          <p className="text-sm text-[#576983] p-2 bg-white rounded-sm">
            Steel shots break in to dust
          </p>
          <p className="text-sm text-[#576983] p-2 bg-white rounded-sm">
            Higher consumptio requires high inventory, more money & space as
            well
          </p>
          <p className="text-sm text-[#576983] p-2 bg-white rounded-sm">
            Shots consumption is higher
          </p>
          <p className="text-sm text-[#576983] p-2 bg-white rounded-sm">
            Increases working cycle time, due to higher consumption in shot
            blasting/penning
          </p>
          <p className="text-sm text-[#576983] p-2 bg-white rounded-sm">
            No consistency in performance, due to fast deterioration in size
          </p>
          <p className="text-sm text-[#576983] p-2 bg-white rounded-sm">
            Less usages life
          </p>
          <p className="text-sm text-[#576983] p-2 bg-white rounded-sm">
            Lower purchase price
          </p>
        </TabsContent>
        <TabsContent
          value="cut-wire-steel-shots"
          className=" flex flex-col gap-y-2"
        >
          <p className="text-sm text-[#576983] bg-white p-2 rounded-sm">
            Raw material is of EXACT composition without any material defect or
            HOLES & POROSITY
          </p>
          <p className="text-sm text-[#576983] bg-white p-2 rounded-sm">
            its drawing process, the grain size is Stabilized
          </p>
          <p className="text-sm text-[#576983] bg-white p-2 rounded-sm">
            All cut wire shots being of same wire, hence are Identical
          </p>
          <p className="text-sm text-[#576983] bg-white p-2 rounded-sm">
            Uniform hardness
          </p>
          <p className="text-sm text-[#576983] bg-white p-2 rounded-sm">
            Micro-Structure is only Tempered Marten site
          </p>
          <p className="text-sm text-[#576983] bg-white p-2 rounded-sm">
            In Micro-structure carbide always there
          </p>
          <p className="text-sm text-[#576983] bg-white p-2 rounded-sm">
            Cut wire shots only wear down
          </p>
          <p className="text-sm text-[#576983] bg-white p-2 rounded-sm">
            Lower inventory requires, for the same job
          </p>
          <p className="text-sm text-[#576983] bg-white p-2 rounded-sm">
            Less consumption than cast shots{" "}
          </p>
          <p className="text-sm text-[#576983] bg-white p-2 rounded-sm">
            Reduce time for shot blasting/penning
          </p>
          <p className="text-sm text-[#576983] bg-white p-2 rounded-sm">
            Consistent performance p-2 bg-white rounded-sm
          </p>
          <p className="text-sm text-[#576983] bg-white p-2 rounded-sm">
            Usages life 2-3 times more
          </p>
          <p className="text-sm text-[#576983] bg-white p-2 rounded-sm">
            Higher purchase price
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DifferenceTabs;
