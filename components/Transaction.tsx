import { images } from "@/constants";
import { FlatList, Image, Text } from "react-native";
import { View } from "react-native";

const Transaction = () => {
  const ongoing = [
    {
      name: "Apple Store",
      key: 1,
      image: images.apple,
      title: "Entertainment",
      price: "-$5,99",
      tint: "white"
    },
    {
      name: "Spotify",
      key: 2,
      image: images.spotify,
      title: "Music",
      price: "-$12,99",
    },
    {
      name: "Money Transfer",
      key: 3,
      image: images.moneyTransfer,
      title: "Transaction",
      price: "$300",
      tint: "white"
    },
    {
      name: "Grocery",
      key: 4,
      image: images.grocery,
      title: "Food",
      price: "-$88",
    },
  ];
  return (
    <View>
      <View className="flex-row items-center justify-between">
        <Text className="text-xl font-semibold pt-8 px-6 dark:text-white">Transactions</Text>
        <Text className="text-[#0781D3] font-medium pt-8 px-6">Sell all</Text>
      </View>
      <FlatList
        data={ongoing}
        renderItem={({ item }) => (
          <View>
            <View className="flex-row justify-between p-6">
              <View className="flex-row">
                <View className="bg-[#DADEE1] dark:bg-[#2C2C42] items-center justify-center rounded-full p-5">
                  <Image
                    source={item.image}
                    className="w-5 h-5"
                    resizeMode="contain"
                    tintColor={item.tint}
                  />
                </View>
                <View className="pt-1">
                  <Text className="pl-4 text-2xl font-semibold dark:text-white">
                    {item.name}
                  </Text>
                  <Text className="text-[#727576] dark:text-white text-base pl-4">
                    {item.title}
                  </Text>
                </View>
              </View>

              <View className="items-center justify-center">
                <Text className="text-xl font-semibold dark:text-white">{item.price}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Transaction;
