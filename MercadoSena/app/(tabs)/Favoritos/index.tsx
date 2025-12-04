import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import Card from '@/components/cards/card';

interface FavoriteItem {
  id: string;
  image: any;
  title: string;
  subtitle?: string;
}

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([
    {
      id: '1',
      image: { uri: 'https://es.wallpapers.com/fondos-de-pantalla/unachica-de-anime-oscura-rodeada-de-una-aura-miseriosa-fc08ippu035ad7f3.html' },
      title: 'Producto 1',
      subtitle: 'el pan es rico',
    },
    {
      id: '2',
      image: { uri: 'https://areajugones.sport.es/wp-content/uploads/2023/10/broly-super-asas.jpg.webp' },
      title: 'Producto 2',
      subtitle: 'pero el pandebono es mejor',
    },
    {
      id: '3',
      image: { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVsBGcl8GB1geWbH0mC-tGbskmtdCcIv6xfQ&s' },
      title: 'tengo hambre',
    },
    {
      id: '4',
      image: { uri: 'https://elcomercio.pe/resizer/v2/AI74TTHCIBHOLNDWDLPZQCQRJE.jpg?auth=0624c6d898de4afd2f53dde5557c0aca2bbd64d53a6e66941362d5a5fef7d4e&width=2400&height=1620&quality=75&smart=true' },
      title: 'Producto 4',
      subtitle: 'cuando nos alimentan',
    },
  ]);

  return (
    <View className="flex-1 bg-white px-3 pt-6">

      <FlatList
        data={favorites}
        keyExtractor={(item: FavoriteItem) => item.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 12 }}
        contentContainerStyle={{ paddingBottom: 20 }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <Card
            imageSource={item.image}
            title={item.title}
            subtitle={item.subtitle}
            initialFavourite={true}
            onCardPress={() => console.log('Abrir producto ->', item.title)}
            onFavouritePress={(fav) =>
              console.log('Favorito cambiado para:', item.title, fav)
            }
            className="w-[48%]"
            variant="elevated"
          />
        )}
      />
    </View>
  );
};

export default FavoritesScreen;