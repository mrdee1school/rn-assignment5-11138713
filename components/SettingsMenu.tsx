import { View, Text, TouchableOpacity, Switch } from "react-native";
import React from "react";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import { useColorScheme } from "nativewind";

const SettingsMenu = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="mx-4 pt-14">
      <View className="px-0">
        <TouchableOpacity className="flex-row justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <Text className="text-lg dark:text-white">Language</Text>
          <ChevronRightIcon className="h-6 w-6" color={"#BDBDBD"} />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <Text className="text-lg dark:text-white">My Profile</Text>
          <ChevronRightIcon className="h-6 w-6" color={"#BDBDBD"} />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <Text className="text-lg dark:text-white">Contact Us</Text>
          <ChevronRightIcon className="h-6 w-6" color={"#BDBDBD"} />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <Text className="text-lg dark:text-white">Change Password</Text>
          <ChevronRightIcon className="h-6 w-6" color={"#BDBDBD"} />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <Text className="text-lg dark:text-white">Privacy Policy</Text>
          <ChevronRightIcon className="h-6 w-6" color={"#BDBDBD"} />
        </TouchableOpacity>
      </View>

      <View className="pt-16 px-3 flex-row items-center justify-between">
        <Text className="text-2xl font-semibold dark:text-white">Theme</Text>
        <Switch value={colorScheme=='dark'} onChange={toggleColorScheme} />
      </View>
    </View>
  );
};

export default SettingsMenu;
