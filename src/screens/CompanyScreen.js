import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

const CompanyScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.belowTitle}>
        OpenAI is an AI research and deployment company. Our mission is to
        ensure that artificial general intelligence benefits all of humanity.
      </Text>
      {/* <TouchableOpacity 
        style={styles.learnmoreButton} 
        onPress={() => navigation.navigate('OpenAI')}>
        <Text style={styles.learnmoreText}>Learn More↗️</Text>
      </TouchableOpacity> */}

      <Image
        source={require("../assets/images/companyImage1.webp")} // Replace with your image URL
        style={styles.Image1Style}
      />

      <View style={styles.line2}></View>

      <Text style={styles.smallTitles}>Our vision for the future of AGI</Text>
      <Text style={styles.smallTexts}>
        Our mission is to ensure that artificial general intelligence—AI systems
        that are generally smarter than humans—benefits all of humanity.
      </Text>
      <Image
        source={require("../assets/images/companyImage2.webp")} // Replace with your image URL
        style={styles.Image1Style}
      />

      <View style={styles.line2}></View>

      <Text style={styles.smallTitles}>
        We are building safe and beneficial AGI, but will also consider our
        mission fulfilled if our work aids others to achieve this outcome.
      </Text>
      <Image
        source={require("../assets/images/companyImage3.webp")} // Replace with your image URL
        style={styles.Image1Style}
      />

      <View style={styles.line2}></View>

      <Text style={styles.smallTitles}>Our Research</Text>
      <Text style={styles.smallTexts}>
        We research generative models and how to align them with human values.
      </Text>
      <Text style={styles.smallTitles}>Sora</Text>
      <Image
        source={require("../assets/images/companyImage4.webp")} // Replace with your image URL
        style={styles.Image1Style}
      />
      <Text style={styles.smallTexts}>
        Video Generation models as world simulations.
      </Text>

      {/* <View style={styles.line2}></View> */}

      <Text style={styles.smallTitles}>Research - Jan 31, 2024</Text>
      <Image
        source={require("../assets/images/companyImage5.webp")} // Replace with your image URL
        style={styles.Image1Style}
      />
      <Text style={styles.smallTexts}>
        Building an early warning systems for LLM-aided biological threat
        creation.
      </Text>

      <View style={styles.line2}></View>

      <Text style={styles.smallTitles}>Our products</Text>
      <Text style={styles.smallTexts}>
        Our API platform offers our latest models and guides for safety best
        practices.
      </Text>

      <Text style={styles.smallTitles}>Product - Sep 28, 2022</Text>
      <Image
        source={require("../assets/images/companyImage6.webp")} // Replace with your image URL
        style={styles.Image1Style}
      />
      <Text style={styles.smallTexts}>
        DALL-E now available without waitlist.
      </Text>

      <Text style={styles.smallTitles}>Product - Dec 15, 2022</Text>
      <Image
        source={require("../assets/images/comapnyImage7.webp")} // Replace with your image URL
        style={styles.Image1Style}
      />
      <Text style={styles.smallTexts}>New and improved embedding model.</Text>

      <View style={styles.line2}></View>

      <Text style={styles.smallTitles}>Careers at OpenAI</Text>
      <Text style={styles.smallTexts}>
        Developing safe and beneficial AI requires people from a wide range of
        disciplines and backgrounds.
      </Text>
      <Image
        source={require("../assets/images/comapnyImage8.webp")} // Replace with your image URL
        style={styles.Image1Style}
      />

      <View style={styles.line2}></View>

      <Text style={styles.smallTitles}>Our structure</Text>
      <Text style={styles.smallTexts}>
        We are governed by a nonprofit and our unique capped-profit model drives
        our commitment to safety. This means that as AI becomes more powerful,
        we can redistribute profits from our work to maximize the social and
        economic benefits of AI technology.
      </Text>
      <Image
        source={require("../assets/images/companyImage9.webp")} // Replace with your image URL
        style={styles.Image1Style}
      />

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
          <TouchableOpacity onPress={() => openLink("https://chat.openai.com")}>
            <Text style={styles.link}>
              ChatGPT login (opens in a new window)
            </Text>
          </TouchableOpacity>
          <Text style={styles.link}>Download</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>API</Text>
          <Text style={styles.link}>Platform overview</Text>
          <Text style={styles.link}>Pricing</Text>
          <Text style={styles.link}>Documentation (opens in a new window)</Text>
          <TouchableOpacity
            onPress={() => openLink("https://platform.openai.com/login")}
          >
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black", // Light pink background
  },
  title: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
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
  belowTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
  },
  Image1Style: {
    height: 300,
    width: 395,
    alignSelf: "center",
    marginVertical: 20,
  },
  line2: {
    borderBottomColor: "grey", // Color of the line
    borderBottomWidth: 1, // Thickness of the line
    width: "100%", // Full width of the container
    marginVertical: 20,
    marginBottom: 26,
  },
  smallTitles: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    marginHorizontal: 14,
  },
  smallTexts: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 10,
    marginVertical: 10,
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
    marginHorizontal: 100
  },
});

export default CompanyScreen;
