import React,{ useState, useEffect } from "react";
import { View, Text, TextInput, Keyboard, ImageBackground, StyleSheet } from "react-native";

import City from "../components/City";
import Info from "../components/Info";

import BG from "../assets/images/bg-1.jpeg";
import {RN_APP_API_KEY} from '@env'

import { SIZES, FONTS } from "../constants";

const Home = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});
  const [showInfo, setShowInfo] = useState(false);

  const fetchWeatherData = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${RN_APP_API_KEY}`
    );
    const data = await res.json();
    setData(data);
    setCity("");
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={BG} style={styles.bg}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={(text) => setCity(text)}
            onSubmitEditing={() => {
              fetchWeatherData();
              setShowInfo(true);
              Keyboard.dismiss();
            }}
          />
        </View>

        {showInfo ? (
          <>
            <City
              name={data?.name}
              country={data?.sys?.country}
              temp={`${data?.main?.temp}˚C`}
              main={data?.weather?.map((w) => w.main)}
              description={data?.weather?.map((w) => w.description)}
            />

            <View style={styles.info}>
              <Info
                value={`${data?.main?.feels_like}˚C`}
                title="Feels_like"
              />
              <Info value={`${data?.main?.humidity}%`} title="Humidity" />
              <Info value={`${data?.main?.pressure}hPa`} title="Pressure" />
            </View>
          </>
        ) : (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
            <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.medium, color: "#fff", }} >
              No weather info to show
            </Text>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bg: {
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  inputContainer: {
    marginTop: 120,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    paddingVertical: 10,
    paddingLeft: 20,
    borderColor: "#000",
    backgroundColor: "#FFF",
    zIndex: 10,

    width: "80%",
    borderRadius: 30,

    shadowColor:'#000',
    shadowOpacity: 0.28,
    shadowRadius: 10,
    shadowOffset:{width: 0, height: 2},

    elevation: 8
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 0,
    left: 0,
  },
});
export default Home;
