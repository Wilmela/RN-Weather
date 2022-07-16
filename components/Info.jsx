import { View, Text, StyleSheet } from "react-native";
import { FONTS, SIZES } from "../constants/";

const Info = ({ value, title }) => (
    <View style={styles.infoStyle}>
      <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.large }}>
        {value}
      </Text>
      <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.medium }}>
        {title}
      </Text>
    </View>
   
);

const styles = StyleSheet.create({
  infoStyle: {
    borderRadius: 10,

    width: 120,
    height: 100,
    backgroundColor: "rgba(255,255,255,0.48)",

    padding: 10,
    marginHorizontal: 5,

    justifyContent:'center',
    alignItems:'center'

  },
});

export default Info;
