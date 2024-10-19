import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
   Linking
} from "react-native";

const OpenAIo1Screen = ({ navigation }) => {

  const o1ModelPress = () => {
    const url = 'https://chatgpt.com/?model=o1-preview';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  const o1ModelApiPress = () => {
    const url = 'https://platform.openai.com/playground/chat?models=o1-mini';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Introducing OpenAI o1</Text>

      <Text style={styles.text}>
        We've developed a new series of AI models designed to spend more time
        thinking before they respond. Here is the latest news on o1 research,
        product and other updates.
      </Text>
      <View style={styles.buttonConainer}>
        <TouchableOpacity
          style={styles.learnmoreButton}
          // onPress={() => navigation.navigate("OpenAI")}
          onPress={o1ModelPress}
        >
          <Text style={styles.learnmoreText}>Try in ChatGPT Plus↗️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.apiButton}
          // onPress={() => navigation.navigate("OpenAI")}
          onPress={o1ModelApiPress}
        >
          <Text style={styles.apiText}>Try in API↗️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Text style={styles.aboveImageText}>September 20 , Research</Text>
        <Image
          source={require("../assets/images/openAIo1team.jpeg")}
          style={styles.teamImage}
        />
        <Text style={styles.belowImageTexts}>Top row (left to right): Mark Chen, Giambattista Parascandolo, Trapit Bansal, Łukasz Kaiser, Hunter Lightman, Karl Cobbe, Łukasz Kondraciuk, Szymon Sidor, Noam Brown, Hongyu Ren, Liam Fedus, Hyung Won Chung.</Text>
        <Text style={styles.belowImageTexts}>Bottom row (left to right): Ilge Akkaya, Jakub Pachocki, Shengjia Zhao, Jason Wei, Wojciech Zaremba, Jerry Tworek</Text>
        <Text style={styles.belowImageTitle}>Host: Bob McGrew</Text>
      </View>

      <View style={styles.imageContainer}>
        <Text style={styles.aboveImageText}>September 12 , Product</Text>
        <Image
          source={require("../assets/images/openAIo1team2.jpeg")}
          style={styles.teamImage2}
        />
      </View>

      <View style={styles.imageContainer}>
        <Text style={styles.aboveImageText}>September 12 , Product</Text>
        <Image
          source={require("../assets/images/openAIcognition.jpeg")}
          style={styles.teamImage2}
        />
      </View>

      <View style={styles.imageContainer}>
        <Text style={styles.aboveImageText}>September 12 , Product</Text>
        <Image
          source={require("../assets/images/openAIquantum.jpeg")}
          style={styles.teamImage2}
        />
      </View>

      <View style={styles.imageContainer1}>
        <Text style={styles.aboveImageText}>September 12 , Product</Text>
        <Image
          source={require("../assets/images/Screenshot1.png")}
          style={styles.teamImage3}
        />
      </View>

      <View style={styles.imageContainer1}>
        <Text style={styles.aboveImageText}>September 12 , Product</Text>
        <Image
          source={require("../assets/images/Screenshot2.png")}
          style={styles.teamImage3}
        />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  title: {
    fontSize: 43,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 10,
  },
  learnmoreButton: {
    backgroundColor: "lightblue",
    // width: "50%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  learnmoreText: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  apiButton: {
    backgroundColor: "black",
    // width: "50%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  apiText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
    textDecorationLine: "underline"
  },
  buttonConainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 15,
    backgroundColor: "black",
    marginTop: 20
  },
  teamImage: {                 
    resizeMode: 'contain',  
    marginHorizontal: 46       
  },
  teamImage2: {                 
    resizeMode: 'contain',  
    marginHorizontal: 46,
    marginBottom: 18       
  },
  aboveImageText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    marginVertical: 8
  },
  belowImageTexts: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    marginHorizontal: 3,
    marginVertical: 10
  },
  belowImageTitle: {
    textAlign: "left",
    fontSize: 20,
    color: "white",
    marginHorizontal: 8,
    marginBottom: 8
  },
  teamImage3:{
    width: 390,
    height: 310,
    marginVertical: 20,

  },
  imageContainer1: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 15,
    backgroundColor: "black",
    marginTop: 20
  }
});

export default OpenAIo1Screen;
