"use client"
import {useState} from "react";
import {tabs} from "@/components/TabMenu/assets";
import {TabButton} from "@/components/TabMenu/TabButton";

export function TabMenu() {
    const [activeTab, setActiveTab] = useState(1)
    return (<div className="flex space-x-6 mt-4">
        {tabs.map(((tab, index) =>
            <TabButton title={tab.title} svgPath={tab.svgPath} key={tab.title}
                       handleClick={() => {
                       }}
                       isActive={index === activeTab}/>))}
    </div>)
}