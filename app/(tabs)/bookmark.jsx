import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import { getSearchPost } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";

const Bookmark = () => {
  const { data: posts } = useAppwrite(() => getSearchPost());

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts ?? []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoCard videos={item} />}
        ListHeaderComponent={({}) => (
          <View className="my-6 px-4">
            <Text className="text-white font-psemibold text-2xl">
              Saved Video
            </Text>
            <View className="mt-6 mb-8">
              <SearchInput placeholder="search for saved video" />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this search Query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Bookmark;
