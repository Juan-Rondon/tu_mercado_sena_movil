import CustomButton from "@/components/buttons/CustomButton";
import SearchBar from "@/components/inputs/SearchBar";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import { FlatList, View, useWindowDimensions } from "react-native";

type Item = {
  id: string;
  title: string;
  price: string;
  image: any;
};

const homeScreen = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { width } = useWindowDimensions();

  // columnas responsivas
  const numColumns = width >= 1024 ? 4 : width >= 768 ? 3 : 2;

  // Mantener tus valores tal cual
  const LIST_PADDING = 16; // contentContainerStyle padding
  const ITEM_PADDING = 8;  // padding del item (tu p-2)
  const GAP = 8;           // gap entre columnas (tu columnWrapperStyle gap)

  // Ancho real de cada card (en px) para que NUNCA se estire
  const itemWidth =
    (width - LIST_PADDING * 0 - GAP * (numColumns - 1) - ITEM_PADDING * 2 * numColumns) /
    numColumns;

  const data: Item[] = useMemo(
    () => [
      {
        id: "1",
        title: "Monitor Samsung LED de 24 Pulg",
        price: "$ 100.000 COP",
        image: require("../../../assets/images/monitorpc.png"),
      },
      {
        id: "2",
        title: "Zapatillas deportivas para mujer",
        price: "$ 75.300 COP",
        image: require("../../../assets/images/zapatillas.png"),
      },
      {
        id: "3",
        title: "Pulseras unisex",
        price: "$ 13.200 COP",
        image: require("../../../assets/images/pulsera.png"),
      },
      {
        id: "4",
        title: "Jean corto para mujer",
        price: "$ 53.500 COP",
        image: require("../../../assets/images/jeancorto.png"),
      },
      {
        id: "5",
        title: "Jean corto para mujer",
        price: "$ 53.500 COP",
        image: require("../../../assets/images/jeancorto.png"),
      },
      {
        id: "6",
        title: "Jean corto para mujer",
        price: "$ 53.500 COP",
        image: require("../../../assets/images/jeancorto.png"),
      },
      {
        id: "7",
        title: "Jean corto para mujer",
        price: "$ 53.500 COP",
        image: require("../../../assets/images/jeancorto.png"),
      },
      {
        id: "8",
        title: "Jean corto para mujer",
        price: "$ 53.500 COP",
        image: require("../../../assets/images/jeancorto.png"),
      },
      {
        id: "9",
        title: "Jean corto para mujer",
        price: "$ 53.500 COP",
        image: require("../../../assets/images/jeancorto.png"),
      },
      {
        id: "10",
        title: "Jean corto para mujer",
        price: "$ 53.500 COP",
        image: require("../../../assets/images/jeancorto.png"),
      },
    ],
    []
  );

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row items-center p-4">
        <View style={{ flex: 1 }}>
          <SearchBar value={search} onChangeText={setSearch} noOuterPadding />
        </View>
      </View>

      <FlatList
        data={data}
        key={numColumns}
        numColumns={numColumns}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: LIST_PADDING, paddingBottom: 120 }}
        columnWrapperStyle={numColumns > 1 ? { gap: GAP, justifyContent: 'space-between' } : undefined}
        renderItem={({ item }) => (
          <View style={{ width: itemWidth, padding: ITEM_PADDING }}>
            <CustomButton
              variant="card"
              isOwner={false}
              source={item.image}
              price={item.price}
              onPress={() => router.push("/product/[id]")}
              onCartPress={() => router.push("/product/[id]?modal=true")}
            >
              {item.title}
            </CustomButton>
          </View>
        )}
      />
    </View>
  );
};

export default homeScreen;