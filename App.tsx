import * as React from 'react';
import { Text, View, Image, TextInput, Button, Alert, ViewComponent, ScrollView, StyleSheet, SafeAreaView, FlatList } from 'react-native';

const styles = StyleSheet.create({
  box: {
    margin: 10,
    backgroundColor: 'rgb(42,202,234)',
    width: '45%',
    maxHeight: 350,
    paddingHorizontal: 10,
    paddingTop: 20,
    borderRadius: 10,
    shadowRadius: 10,
    borderColor: 'rgb(68,68,68)',
    borderWidth: 1,
  },
  img: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  productname: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 10,
    fontSize: 15,
  },
  productprice: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  }
});

const App = () => {
  const items = [
    { id: 1, name: 'Abibas Sneakers White', icon: 'https://img.ws.mms.shopee.co.id/9ef366084cee7b605870b54cb11acf7f', price: 'Rp. 200.000' },
    { id: 2, name: 'Safety Shoes', icon: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2023/11/14/f40a4c7b-db58-4e0f-8c0e-bb8c7f33ec15.jpg', price: 'Rp. 199.999' },
    { id: 3, name: 'Nike Shoes', icon: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//107/MTA-58625819/nike_sepatu_pria_original_nike_air_force_1_white_black_full01_a24d66cf.jpg', price: 'Rp. 349.000' },
    { id: 4, name: 'Swallow Sandal Premium', icon: 'https://img.lazcdn.com/g/p/69ed80df7d4cef84c3b144b4173fab36.jpg_720x720q80.jpg', price: 'Rp. 500.000' },
    { id: 5, name: 'Bengkiak Original', icon: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2020/10/17/f391f843-9ca1-4705-b290-20e1d99b667b.jpg', price: 'Rp. 520.000' },
    { id: 6, name: 'Shark Sandal', icon: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//104/MTA-88094901/no_brands_sandal_hiu_jelly_elastis_full01_7f2fdce8.jpg', price: 'Rp. 540.000' },
    { id: 7, name: 'Golden Shoes', icon: 'https://www.blibli.com/friends-backend/wp-content/uploads/2023/01/B111196-cover-scaled.jpg', price: 'Rp. 1.000.000' },

  ];

  const renderItems = ({ item }) => {
    return (
      <View key={item.id} style={styles.box}>
        <Image style={styles.img} source={{ uri: item.icon }} />
        <Text style={styles.productname}>{item.name}</Text>
        <Text style={styles.productprice}>{item.price}</Text>
      </View>
    );
  };

  const myListEmpty = () => {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text>No data found</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <FlatList
          data={items}
          renderItem={renderItems}
          numColumns={2}
          ListEmptyComponent={myListEmpty}
          ListHeaderComponent={() => (
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                marginTop: 20,
                fontWeight: 'bold',
                color: 'black'
              }}>
              Warung Abibas Cak Koo
            </Text>
          )}
          ListFooterComponent={() => (
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                marginBottom: 20,
                fontWeight: 'bold',
              }}>
              Created By Koozee
            </Text>
          )}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default App;
