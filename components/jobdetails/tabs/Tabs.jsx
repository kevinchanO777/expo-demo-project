import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SIZES } from "../../../constants";

import styles from "./tabs.style";

const TabButton = ({ name, activetab, onHandleSearch }) => (
  <TouchableOpacity
    style={styles.btn(name, activetab)}
    onPress={onHandleSearch}
  >
    <Text style={styles.btnText(name, activetab)}>{name}</Text>
  </TouchableOpacity>
);

const Tabs = ({ tabs, activetab, setActiveTab }) => {
  return (
    <View>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activetab={activetab}
            onHandleSearch={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default Tabs;
