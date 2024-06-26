import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import Transaction from "../../components/Transaction";
import ActivityCard from "../../components/ActivityCard";

const Home = () => {
  return (
    <SafeAreaView className="bg-[#FFFFFF] dark:bg-[#161622] h-full">
      <View className="flex-row justify-between p-6">
        <View className="flex-row">
          <Image source={images.profile} className="w-14 h-14" />
          <View className="">
            <Text className="text-[#727576] text-base pl-4 dark:text-white">Welcome back,</Text>
            <Text className="pl-4 text-xl font-semibold dark:text-white">Nico Amalano</Text>
          </View>
        </View>

        <View className="bg-[#DADEE1] dark:bg-[#2C2C42] rounded-full p-2 w-14 h-14 items-center justify-center">
          <Image source={images.search} className="w-5 h-5" tintColor={"white"} />
        </View>
      </View>

      <View className="items-center justify-center flex-row pt-4">
        <Image
          source={images.card}
          className="w-[92%] h-[230px]"
          resizeMode="contain"
        />
      </View>

      <ActivityCard />

      <Transaction />
    </SafeAreaView>
  );
};

export default Home;
