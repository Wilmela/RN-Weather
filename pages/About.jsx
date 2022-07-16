import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import { SIZES, FONTS } from "../constants";
import LOGO from "../assets/images/icon.png";
import CLOUD from "../assets/images/cloud.webp";

const About = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={CLOUD} resizeMode="cover" style={styles.bg}>
        <View
          style={{
            width: 150,
            height: 150,
            backgroundColor: "#fff",
            borderRadius: 75,
            marginBottom: 20,
          }}
        >
          <Image source={LOGO} style={{ width: "100%", height: "100%" }} />
        </View>
        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium }}>
          RN-Weather
        </Text>
        <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, marginHorizontal: 5 }}>
          Built using react native and openweathermap api
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f5f8",
  },
  bg: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f5f8",
  },
});

export default About;
