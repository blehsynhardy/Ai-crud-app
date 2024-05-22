import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { router, usePathname } from "expo-router";

const SearchInput = ({ initialQuery, placeholder }) => {
  const pathName = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className="w-full h-16 px-4 bg-black-200 border-2 border-black-100 focus:border-secondary items-center rounded-2xl flex-row">
      <TextInput
        className="flex-1 text-white mt-0.5 font-pregular text-base space-x-4"
        value={query}
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
        placeholder={placeholder || "search for video topic"}
      />
      <TouchableOpacity
        onPress={() => {
          if (!query) {
            Alert.alert("Missing Query", "Please input something to search");
          }

          if (pathName.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image source={icons.search} className="h-5 w-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
