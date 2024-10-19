import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  //  Render function for Card 1
  const renderCard1 = () => (
    <View style={styles.card}>
      <Image
        source={require("../assets/images/openAIo1.jpeg")}
        style={styles.cardImage}
      />
      <Text style={styles.cardTitle}>OpenAI o1</Text>
      <Text style={styles.cardText}>
        A new series of AI models designed to spend more time thinking before
        they respond.
      </Text>
      <TouchableOpacity
        style={styles.learnmoreButton}
        onPress={() => navigation.navigate("OpenAIo1Screen")}
      >
        <Text style={styles.learnmoreText}>Learn More↗️</Text>
      </TouchableOpacity>
    </View>
  );

  // Render function for Card 2
  const renderCard2 = () => (
    <View style={styles.card}>
      <Image
        source={require("../assets/images/openAIgpt.jpeg")}
        style={styles.cardImage}
      />
      <Text style={styles.cardTitle}>ChatGPT on your desktop</Text>
      <Text style={styles.cardText}>
        Chat about email, screenshots, files, and anything on your screen.
      </Text>
      <TouchableOpacity
        style={styles.learnmoreButton}
        onPress={() => navigation.navigate("ChatGptScreen")}
      >
        <Text style={styles.learnmoreText}>Learn More↗️</Text>
      </TouchableOpacity>
    </View>
  );

  // Render function for Card 3
  const renderCard3 = () => (
    <View style={styles.card}>
      <Image
        source={require("../assets/images/openAIapple.jpeg")}
        style={styles.cardImage}
      />
      <Text style={styles.cardTitle}>Apple & ChatGPT</Text>
      <Text style={styles.cardText}>
        OpenAI and Apple announce partnership to integrate ChatGPT into Apple
        experiences.
      </Text>
      <TouchableOpacity
        style={styles.learnmoreButton}
        onPress={() => navigation.navigate("Research")}
      >
        <Text style={styles.learnmoreText}>Learn More↗️</Text>
      </TouchableOpacity>
    </View>
  );

  // Render function for Card 4
  const renderCard4 = () => (
    <View style={styles.card}>
      <Image
        source={require("../assets/images/openAIsora.jpeg")}
        style={styles.cardImage}
      />
      <Text style={styles.cardTitle}>Introducing Sora</Text>
      <Text style={styles.cardText}>
        Creating realistic and imaginative video from text.
      </Text>
      <TouchableOpacity
        style={styles.learnmoreButton}
        onPress={() => navigation.navigate("Research")}
      >
        <Text style={styles.learnmoreText}>Learn More↗️</Text>
      </TouchableOpacity>
    </View>
  );

  // Render function for Card 5
  const renderCard5 = () => (
    <View style={styles.card}>
      <Image
        source={require("../assets/images/openAIhomend.jpeg")}
        style={styles.cardImage}
      />
      <Text style={styles.cardTitle}>OpenAI GPT</Text>
      <Text style={styles.cardText}>
        Instant answers. Greater productivity. Endless inspiration.
      </Text>
      <TouchableOpacity
        style={styles.learnmoreButton}
        onPress={() => navigation.navigate("Research")}
      >
        <Text style={styles.learnmoreText}>Try ChatGPT↗️</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.navigation}>
          <TouchableOpacity
            style={styles.navigateButtons}
            title="Research"
            onPress={() => navigation.navigate("Research")}
          >
            <Text style={styles.navigateText}>Research</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navigateButtons}
            title="Products"
            onPress={() => navigation.navigate("ProductScreen")}
          >
            <Text style={styles.navigateText}>Products</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navigateButtons}
            title="Safety"
            onPress={() => navigation.navigate("SafetyScreen")}
          >
            <Text style={styles.navigateText}>Safety</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navigateButtons}
            title="Company"
            onPress={() => navigation.navigate("CompanyScreen")}
          >
            <Text style={styles.navigateText}>Company</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          {renderCard1()}
          {renderCard2()}
          {renderCard3()}
          {renderCard4()}
          {renderCard5()}
        </ScrollView>

        {/* {cardItems.map((item, index) => renderCard1(item, index))}
      {cardItems2.map((item, index) => renderCard2(item, index))}
      {cardItems.map((item, index) => renderCard3(item, index))} 
      {cardItems.map((item, index) => renderCard4(item, index))}
      {cardItems.map((item, index) => renderCard5(item, index))} */}

        <View style={styles.container}></View>

            <View style={styles.contentContainer}>
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Our Research</Text>
                <Text style={styles.link}>Overview</Text>
                <Text style={styles.link}>Index</Text>
                <Text style={styles.link}>Latest advancements</Text>
                <Text style={styles.link}>OpenAI o1</Text>
                <Text style={styles.link}>OpenAI o1-mini</Text>
                <Text style={styles.link}>GPT-4</Text>
                <Text style={styles.link}>GPT-4o mini</Text>
                <Text style={styles.link}>DALL·E 3</Text>
                <Text style={styles.link}>Sora</Text>
                <Text style={styles.link}>ChatGPT</Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>For Everyone</Text>
                <Text style={styles.link}>For Teams</Text>
                <Text style={styles.link}>For Enterprises</Text>
                <TouchableOpacity onPress={() => openLink('https://chat.openai.com')}>
                  <Text style={styles.link}>ChatGPT login (opens in a new window)</Text>
                </TouchableOpacity>
                <Text style={styles.link}>Download</Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>API</Text>
                <Text style={styles.link}>Platform overview</Text>
                <Text style={styles.link}>Pricing</Text>
                <Text style={styles.link}>Documentation (opens in a new window)</Text>
                <TouchableOpacity onPress={() => openLink('https://platform.openai.com/login')}>
                  <Text style={styles.link}>API login (opens in a new window)</Text>
                </TouchableOpacity>
                <Text style={styles.link}>Explore more</Text>
                <Text style={styles.link}>OpenAI for business</Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Stories</Text>
                <Text style={styles.link}>Safety overview</Text>
                <Text style={styles.link}>Safety overview</Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Company</Text>
                <Text style={styles.link}>About us</Text>
                <Text style={styles.link}>News</Text>
                <Text style={styles.link}>Our Charter</Text>
                <Text style={styles.link}>Security</Text>
                <Text style={styles.link}>Residency</Text>
                <Text style={styles.link}>Careers</Text>
              </View>

              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Terms & Policies</Text>
                <Text style={styles.link}>Terms of use</Text>
                <Text style={styles.link}>Privacy policy</Text>
                <Text style={styles.link}>Brand guidelines</Text>
                <Text style={styles.link}>Other policies</Text>
              </View>
            </View>

      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "black",
    alignItems: "center",
    backgroundColor: "black",
    fontSize: 50,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "black",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: "black",
    alignItems: "center",
    marginHorizontal: 0,
  },
  cardTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  cardText: {
    fontSize: 18,
    color: "white",
  },
  navigation: {
    flex: 1,
    flexDirection: "row",
  },
  navigateButtons: {
    backgroundColor: "black",
  },
  navigateText: {
    color: "white",
    marginHorizontal: 15,
    marginBottom: 15,
    paddingVertical: 15,
    paddingHorizontal: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  learnmoreButton: {
    backgroundColor: "lightblue",
    width: "50%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
  },
  learnmoreText: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: "white",
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: '#007bff',
    marginBottom: 5,
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});

export default HomeScreen;
