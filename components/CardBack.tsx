import React from "react";
import { View, Text } from "react-native";
import { QrCode } from "@mui/icons-material";


export default function CardBack() {
    return (
        <View>
            <QrCode />
            <Text>Koodi</Text>
        </View>

    )
}