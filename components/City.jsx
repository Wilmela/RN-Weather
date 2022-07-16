import { View, Text, StyleSheet } from "react-native";
import { FONTS, SIZES } from "../constants/";

const City = ({ name, temp, main, country, description }) => (
  <View style={styles.container}>
    <View style={styles.cityTemp}>
    <View style={{display: 'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
      <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, marginRight: 5 }}>
        {name}
      </Text>
      <Text style={{fontFamily: FONTS.bold, fontSize: SIZES.large}}>{country}</Text>
    </View>
      <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.XLarge - 2}}>
        {temp}
      </Text>
    </View>
    <View style={{ width:'50%', justifyContent:'flex-end', alignItems:'flex-end'}}>
    <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, textTransform: "uppercase", }} >
      {main}
    </Text>
    <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small }} >
      {description}
    </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  cityTemp: {
    padding: 15,

    borderRadius: 10,

    width: "50%",
    backgroundColor: "rgba(255,255,255,0.18)",
  },
});

export default City;
