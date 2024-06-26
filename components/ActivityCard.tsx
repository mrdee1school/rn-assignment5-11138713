import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constants";

const ActivityCard = () => {
  return (
    <View>
      <View className="flex-row items-center justify-around py-7">
        <View>
          <View className="bg-[#DADEE1] dark:bg-[#2C2C42] rounded-full p-5">
            <Image
              source={images.send}
              className="w-5 h-5"
              resizeMode="contain"
              tintColor={"white"}
            />
          </View>
          <Text className="text-center dark:text-white">Send</Text>
        </View>
        <View>
          <View className="bg-[#DADEE1] dark:bg-[#2C2C42] rounded-full p-5">
            <Image
              source={images.recieve}
              className="w-5 h-5"
              resizeMode="contain"
              tintColor={"white"}
            />
          </View>
          <Text className="text-center dark:text-white">Receive</Text>
        </View>
        <View>
          <View className="bg-[#DADEE1] dark:bg-[#2C2C42] rounded-full p-5">
            <Image
              source={images.loan}
              className="w-5 h-5"
              resizeMode="contain"
              tintColor={"white"}
            />
          </View>
          <Text className="text-center dark:text-white">Loan</Text>
        </View>
        <View>
          <View className="bg-[#DADEE1] dark:bg-[#2C2C42] rounded-full p-5">
            <Image
              source={images.topUp}
              className="w-5 h-5"
              resizeMode="contain"
              tintColor={"white"}
            />
          </View>
          <Text className="text-center dark:text-white">Topup</Text>
        </View>
      </View>
    </View>
  );
};

export default ActivityCard;
