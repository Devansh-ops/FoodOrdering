import { StyleSheet, Image } from 'react-native';
import { Text, View } from '@/components/Themed';
import Colors from '@/constants/Colors';

import { Product } from '@/types';

type ProductListItemProps = {
    product: Product,
}

export default function ProductListItem({ product }: ProductListItemProps ) {
    return (
        <View style={styles.container}>
            <Image source={product.image} style={styles.image} />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    flex: 1,
},
image: {
    width: '100%',
    height: '100%',
    flex: 1,
    aspectRatio: 1,
    resizeMode: 'contain'
},
title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
},
price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
},
});

