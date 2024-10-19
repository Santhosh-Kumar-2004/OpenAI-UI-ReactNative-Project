import React from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  ScrollView,
  Linking,
  Image
 } from "react-native";

const ChatGptScreen = ({ navigation }) => {

  const chatGptPress= () => {
    const url = 'https://chatgpt.com/';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  const chatGptDownlaodPress= () => {
    const url = 'https://openai.com/chatgpt/download/';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  const learnAboutGptPress= () => {
    const url = 'https://openai.com/chatgpt/use-cases/writing-with-ai/';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  const chatGptPricing= () => {
    const url = 'https://openai.com/chatgpt/pricing/';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  const chatGptPricingFree= () => {
    const url = 'http://chatgpt.com/';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  const chatGptPricingPlus= () => {
    const url = 'https://chatgpt.com/#pricing';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  const chatGptPricingPlusLimits= () => {
    const url = 'https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus#h_d78bb59065';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.title}>ChatGPT</Text>
        <Text style={styles.smallTitle}>Get answers. Find inspiration. Be more productive.</Text>
        <View style={styles.smallTitleContainer}>
          <Text style={styles.verySmallTitle}>Free to use. Easy to try. Just ask and ChatGPT can help with writing, learning, brainstorming, and more.</Text>
        </View>

        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/images/chatGptImg.jpeg")}
            style={styles.teamImage2}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.learnmoreButton1}
            // onPress={() => navigation.navigate("OpenAI")}
            onPress={chatGptPress}
          >
            <Text style={styles.learnmoreText1}>Start Now↗️</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.learnmoreButton2}
            // onPress={() => navigation.navigate("OpenAI")}
            onPress={chatGptDownlaodPress}
          >
            <Text style={styles.learnmoreText2}>Download the App↗️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.line} />

        <View style={styles.downImgContainer1}>
          <Text style={styles.downImgText1}>Writes, brainstorms, edits, and explores ideas with you.</Text>
          <TouchableOpacity
            style={styles.downImgButton}
            // onPress={() => navigation.navigate("OpenAI")}
            onPress={learnAboutGptPress}
          >
            <Text style={styles.downImgButtonText}>Learn more about writing with ChatGPT➡️</Text>
          </TouchableOpacity>
        </View>
        
        <View>
          <Image
            source={require("../assets/images/01_edit_email_desktop_dark.webp")}
            style={styles.img01}
          />
        </View>

        <View style={styles.line} />

        <View style={styles.downImgContainer1}>
          <Text style={styles.downImgText2}>Summarize meetings. Find new insights. Increase productivity. Stay Update.</Text>
        </View>
        
        <View>
          <Image
            source={require("../assets/images/02_summarize_desktop_dark.webp")}
            style={styles.img01}
          />
        </View>

        <View style={styles.line} />

        <View style={styles.downImgContainer1}>
          <Text style={styles.downImgText2}>Generate and debug code. Automate repetitive tasks. Learn new APIs.</Text>
        </View>
        
        <View>
          <Image
            source={require("../assets/images/03_code_desktop_dark.webp")}
            style={styles.img01}
          />
        </View>

        <View style={styles.line} />

        <View style={styles.downImgContainer1}>
          <Text style={styles.downImgText2}>Learn something new. Dive into a hobby. Answer complex questions.</Text>
        </View>
        
        <View>
          <Image
            source={require("../assets/images/04_learn_desktop_dark.webp")}
            style={styles.img04}
          />
        </View>

        <View style={styles.line} />

        <View>
          <Text style={styles.endText}>Get started with ChatGPT today</Text>
          <TouchableOpacity
            style={styles.downImgButton}
            // onPress={() => navigation.navigate("OpenAI")}
            onPress={chatGptPricing}
          >
            <Text style={styles.downImgButtonText}>View pricing plans➡️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pricingContainer}>
          <Text style={styles.freePricing}>Free</Text>  
          <Text style={styles.freePricingTexts}>✔️   Assistance with writing, problem solving and more</Text>
          <Text style={styles.freePricingTexts}>✔️   Access to GPT-4o mini</Text>
          <Text style={styles.freePricingTexts}>✔️   Limited access to GPT-4o</Text>
          <Text style={styles.freePricingTexts}>✔️   Limited access to advanced data analysis, file uploads, vision, web browsing, and image generation</Text>
          <Text style={styles.freePricingTexts}>✔️   Use custom GPTs</Text>
          <Text style={styles.freePricingTextTag}>$0/ month</Text>
          <TouchableOpacity
            style={styles.learnmoreButton1}
            // onPress={() => navigation.navigate("OpenAI")}
            onPress={chatGptPricingFree}
          >
            <Text style={styles.learnmoreText1}>Start Now↗️</Text>
          </TouchableOpacity>
        </View>  

        <View style={styles.pricingContainer}>
          <Text style={styles.freePricing}>Plus</Text>  
          <Text style={styles.freePricingTexts}>✔️   Early access to new features</Text>
          <Text style={styles.freePricingTexts}>✔️   Access to GPT-4, GPT-4o, GPT-4o mini</Text>
          <Text style={styles.freePricingTexts}>✔️   Up to 5x more messages for GPT-4o</Text>
          <Text style={styles.freePricingTexts}>✔️   Access to advanced data analysis, file uploads, vision, and web browsing</Text>
          <Text style={styles.freePricingTexts}>✔️   Access to Advanced Voice Mode</Text>
          <Text style={styles.freePricingTexts}>✔️   DALL·E image generation</Text>
          <Text style={styles.freePricingTexts}>✔️   Create and use custom GPTs</Text>
          <Text style={styles.freePricingTextTag}>$20/ month</Text>
          <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.learnmoreButton1}
            // onPress={() => navigation.navigate("OpenAI")}
            onPress={chatGptPricingPlus}
          >
            <Text style={styles.learnmoreText1}>Start Now↗️</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.learnmoreButton2}
            // onPress={() => navigation.navigate("OpenAI")}
            onPress={chatGptPricingPlusLimits}
          >
            <Text style={styles.learnmoreText2}>Limits Apply↗️</Text>
          </TouchableOpacity>
        </View>
        </View>  

        <Text style={styles.endText2_0}>Get started with ChatGPT today</Text>
          <TouchableOpacity
            style={styles.learnmoreButtonEnd}
            // onPress={() => navigation.navigate("OpenAI")}
            onPress={chatGptPricingPlus}
          >
            <Text style={styles.learnmoreText1}>Try ChatGPT↗️</Text>
          </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black", // Light pink background
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    paddingHorizontal: 2
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    color: "white"
  },
  smallTitle: {
    color: "white",
    fontSize: 34,
    textAlign: "center",
    marginHorizontal: 5,
    paddingHorizontal: 5,
    marginVertical: 10,
    fontWeight: "bold"
  },
  verySmallTitle: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 7
  },
  smallTitleContainer: {
    paddingHorizontal: 46
  },
  learnmoreButton1: {
    backgroundColor: "lightblue",
    width: "50%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
  },
  learnmoreText1: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  learnmoreButton2: {
    backgroundColor: "black",
    width: "50%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
  },
  learnmoreText2: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 10,
    marginLeft: 2,
    textDecorationLine: "underline"
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 30,
    marginVertical: 10
  },
  teamImage2: {                 
    resizeMode: 'contain',  
    marginHorizontal: 46,
    marginTop: 10      
  },
  downImgText1: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  line: {
    borderBottomColor: 'white',  // Color of the line
    borderBottomWidth: 1,       // Thickness of the line
    width: '100%',              // Full width of the container
    marginVertical: 20,    
    marginBottom: 26
  },
  downImgButton: {
    backgroundColor: "black",
    width: "75%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
  },
  downImgButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 10,
    marginLeft: 2,
    textDecorationLine: "underline"
  },
  img01: {
    width: 370,
    height: 275
  },
  img04: {
    width: 370,
    height: 275,
    marginBottom: 20
  },
  downImgText2: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginHorizontal: 5
  },
  endText: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginHorizontal: 5
  },
  pricingContainer: {
    borderColor: "white",
    borderWidth: 1,
    width: "90%"
  },
  freePricing: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
    textDecorationLine: "underline"
  },
  freePricingTexts: {
    color: "white",
    marginLeft: 7,
    fontSize: 15,
    marginVertical: 7
  },
  freePricingTextTag: {
    color: "white",
    marginLeft: 7,
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 7,
    marginVertical: 10,
    marginLeft: 15
  },
  endText2_0: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginHorizontal: 5,
    marginVertical: 10
  },
  learnmoreButtonEnd: {
    backgroundColor: "lightgreen",
    width: "50%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
  },
});

export default ChatGptScreen;
