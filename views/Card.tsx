
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, Animated, Dimensions } from 'react-native';
import CardFront from '../components/CardFront';

const Card = () => {
    const [flipped, setFlipped] = useState(false);
    const spinValue = new Animated.Value(0);

    // Get the screen dimensions
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    // Calculate the width and height of the card
    const cardWidth = screenWidth * 0.95;
    const cardHeight = screenHeight / 3;

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
    });

    const animate = () => {
        LayoutAnimation.configureNext({
            duration: 350,
            update: {
                type: LayoutAnimation.Types.easeIn,
                property: LayoutAnimation.Properties.scaleXY,
            },
        });
        setFlipped(!flipped);
    };

    return (
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
            <TouchableOpacity onPress={animate}>
                <Animated.View style={{
                    transform: [{ rotateY: spin }], width: cardWidth, height: cardHeight, backgroundColor: 'gray', borderRadius: 20, justifyContent: 'center', alignItems: 'center', shadowColor: "#fff",
                    shadowOffset: {
                        width: 0,
                        height: 8,
                    },
                    shadowOpacity: 0.46,
                    shadowRadius: 11.14,

                    elevation: 17,
                }}>
                    {!flipped ? (
                        <View style={styles.container}>
                            <CardFront />
                        </View>
                    ) : (
                        <View style={styles.container}>
                            <Text>Back</Text>
                        </View>
                    )}
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
};


export default Card;
