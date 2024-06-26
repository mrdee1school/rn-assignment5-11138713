import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context"
import SettingsMenu from "@/components/SettingsMenu";

const Profile = () => {
  return (
    <SafeAreaView className="bg-[#FFFFFF] dark:bg-[#161622] h-full">
      <View className="items-center justify-center py-6">
        <Text className="font-semibold text-2xl dark:text-white">Settings</Text>
      </View>
      <View>
        <SettingsMenu />
      </View>
    </SafeAreaView>
  );
};

export default Profile;
