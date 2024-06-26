import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image, Text, View } from "react-native";
import { images } from "@/constants"

const TabIcon = ({ image, color, name, focused }: any) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={image}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-semibold" : "font-regular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#0F46C1",
          tabBarInactiveTintColor: "#9A9DA4",
          tabBarStyle: {
            backgroundColor: "#3D3D68",
            borderTopWidth: 15,
            borderTopColor: "#3D3D68",
            height: 84,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                image={images.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        {/* <Tabs.Screen
          name="myCards"
          options={{
            title: "My Cards",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                image={images.myCards}
                color={color}
                name="My Cards"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="statistics"
          options={{
            title: "Statistics",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                image={images.statictics}
                color={color}
                name="Statistics"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                image={images.settings}
                color={color}
                name="Settings"
                focused={focused}
              />
            ),
          }}
        /> */}
      </Tabs>
    </>
  );
}
