"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
  image: string;
};

export const Tabs = ({
                       tabs: propTabs = [],
                       containerClassName,
                       activeTabClassName,
                       tabClassName,
                       contentClassName,
                     }: {
        tabs: Tab[];
        containerClassName?: string;
        activeTabClassName?: string;
        tabClassName?: string;
        contentClassName?: string;
      }) => {
  const defaultTabs: Tab[] = [
    {
      title: "Onglet 1",
      value: "tab1",
      content: <div>Contenu Ap1</div>,
      image: "/4799410.jpg",
    },
    {
      title: "Onglet 2",
      value: "tab2",
      content: <div>Contenu Ap2</div>,
      image: "/3659197.jpg",
    },
    {
      title: "Onglet 3",
      value: "tab3",
      content: <div>Contenu Ap3</div>,
      image: "/4401280.jpg",
    },
  ];

  const tabsToUse = propTabs.length > 0 ? propTabs : defaultTabs;

  const [active, setActive] = useState<Tab>(tabsToUse[0]);
  const [tabs, setTabs] = useState<Tab[]>(tabsToUse);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...tabs];
    const selectedTab = newTabs.splice(idx, 1);
    if (selectedTab.length > 0) {
      newTabs.unshift(selectedTab[0]);
      setTabs(newTabs);
      setActive(newTabs[0]);
    }
  };

  const [hovering, setHovering] = useState(false);

  return (
      <>
        <div
            className={cn(
                "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
                containerClassName
            )}
        >
          {tabs.map((tab, idx) => (
              <button
                  key={tab.title}
                  onClick={() => {
                    moveSelectedTabToTop(idx);
                  }}
                  onMouseEnter={() => setHovering(true)}
                  onMouseLeave={() => setHovering(false)}
                  className={cn("relative px-4 py-2 rounded-full flex items-center gap-2", tabClassName)}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
              >
                {tab.image && (
                    <Image
                        src={tab.image}
                        alt={tab.title}
                        width={500}
                        height={500}
                        className="w-6 h-6 rounded-full object-cover"
                    />
                )}
                <span className="relative block text-black dark:text-white">
              {tab.title}
            </span>
              </button>
          ))}
        </div>
        <FadeInDiv
            tabs={tabs}
            active={active}
            key={active.value}
            hovering={hovering}
            className={cn("mt-32", contentClassName)}
        />
      </>
  );
};


export const FadeInDiv = ({
                            className,
                            tabs,
                            active,
                            hovering,
                          }: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab; // Propriété pour identifier l'onglet actif
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };

  return (
      <div className="relative w-full h-full">
        {active.image && (
            <div className="relative w-full h-64 flex justify-center items-center mb-4">
              <Image
                  src={active.image}
                  alt={active.title}
                  width={200}
                  height={200}
                  className="rounded-lg object-cover"
              />
            </div>
        )}
        {tabs.map((tab, idx) => (
            <motion.div
                key={tab.value}
                layoutId={tab.value}
                style={{
                  scale: 1 - idx * 0.1,
                  top: hovering ? idx * -50 : 0,
                  zIndex: -idx,
                  opacity: idx < 3 ? 1 - idx * 0.1 : 0,
                }}
                animate={{
                  y: isActive(tab) ? [0, 40, 0] : 0,
                }}
                className={cn("w-full h-full absolute top-0 left-0", className)}
            >
              {tab.content}
            </motion.div>
        ))}
      </div>
  );
};

