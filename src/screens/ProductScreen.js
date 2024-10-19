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

const ProductScreen = ({ navigation }) => {
  const startBuildingPress = () => {
    const url = "https://platform.openai.com/"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL: ", err)
    );
  };

  const apiPricingPress = () => {
    const url = "https://openai.com/api/pricing/"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL: ", err)
    );
  };

  const product1ImagePress = () => {
    const url = "https://platform.openai.com/docs/guides/text-generation/chat-completions-api"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL: ", err)
    );
  };

  const product2ImagePress = () => {
    const url = "https://platform.openai.com/docs/assistants/tools/file-search"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL: ", err)
    );
  };

  const product3ImagePress = () => {
    const url = "https://platform.openai.com/docs/assistants/tools/code-interpreter"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL: ", err)
    );
  };

  const product4ImagePress = () => {
    const url = "https://platform.openai.com/docs/assistants/tools/function-calling"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL: ", err)
    );
  };

  const product5ImagePress = () => {
    const url = "https://platform.openai.com/docs/guides/vision"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL: ", err)
    );
  };

  const product6ImagePress = () => {
    const url = "https://platform.openai.com/docs/guides/text-generation/json-mode"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL: ", err)
    );
  };

  const product7ImagePress = () => {
    const url = "https://platform.openai.com/docs/guides/fine-tuning"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL: ", err)
    );
  };

  const productFinalPress = () => {
    const url = "https://platform.openai.com/playground"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL: ", err)
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        The most powerful platform for building AI products
      </Text>
      <Text style={styles.smallTitle}>
        Build and scale AI experiences powered by industry-leading models and
        tools.
      </Text>
      <View style={styles.buttonConainer}>
        <TouchableOpacity
          style={styles.learnmoreButton}
          onPress={startBuildingPress}
        >
          <Text style={styles.learnmoreText}>Start Building↗️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.apiButton} onPress={apiPricingPress}>
          <Text style={styles.apiText}>View API Pricing</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.line}></View>

      <Text style={styles.flagShipText}>Flagship Moldels</Text>

      <View style={styles.gpt4Container}>
        <Text style={styles.gpt4Title}>GPT-4o</Text>
        <Text style={styles.gptTextLines}>
          Our high-intelligence flagship model for complex, multi-step tasks
        </Text>

        <Text style={styles.tickMarks}>✔️Text and vision</Text>
        <Text style={styles.tickMarks}>✔️128k context length</Text>
        <Text style={styles.tickMarks}>
          ✔️Input: $5 | Output: $15per 1M tokens
        </Text>

        <TouchableOpacity
          style={styles.learnmoreGreenBtn}
          onPress={startBuildingPress}
        >
          <Text style={styles.learnmoreText}>Learn More↗️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.gpt4MiniContainer}>
        <Text style={styles.gpt4MiniTitle}>GPT-4o mini</Text>
        <Text style={styles.gptTextLines}>
          Our affordable and intelligent small model for fast, lightweight tasks
        </Text>

        <Text style={styles.tickMarks}>✔️Text and vision</Text>
        <Text style={styles.tickMarks}>✔️128k context length</Text>
        <Text style={styles.tickMarks}>
          ✔️Input: $0.15 | Output: $0.60 per 1M tokens
        </Text>

        <TouchableOpacity
          style={styles.learnmoreGreenBtn}
          onPress={startBuildingPress}
        >
          <Text style={styles.learnmoreText}>Learn More↗️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.line2}></View>

      <Text style={styles.title2}>
        Introducing OpenAI o1-preview and OpenAI o1-mini, our new models with
        reasoning capabilities.
      </Text>
      <TouchableOpacity
        style={styles.learnmoreButton}
        onPress={() => navigation.navigate("OpenAIo1Screen")}
      >
        <Text style={styles.learnmoreText}>Learn More↗️</Text>
      </TouchableOpacity>

      <View style={styles.line2}></View>

      <View>
        <Text style={styles.title}>
          Access the power of our models with APIs
        </Text>
        <View style={styles.title2ButtonContainer}>
          <TouchableOpacity
            style={[styles.title2Buttons, styles.title2FirstButton]}
            onPress={() => navigation.navigate("OpenAIo1Screen")}
          >
            <Text style={styles.title2ButtonText}>Chat API</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.title2Buttons}
            onPress={() => navigation.navigate("OpenAIo1Screen")}
          >
            <Text style={styles.title2ButtonText}>Realtime API</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.title2Buttons}
            onPress={() => navigation.navigate("OpenAIo1Screen")}
          >
            <Text style={styles.title2ButtonText}>Assistant API</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.title2Buttons}
            onPress={() => navigation.navigate("OpenAIo1Screen")}
          >
            <Text style={styles.title2ButtonText}>Batch API</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <View style={styles.line2}></View> */}

      <View style={styles.imageTextContainer}>
        <Image
          source={require("../assets/images/products1Image.webp")}
          style={styles.imagesOfPrducts}
        />
        <Text style={styles.productsDownTitle}>Chat Completions API</Text>
        <Text style={styles.productsDownText}>
          Get access to our most powerful models with a few lines of code.
        </Text>
        <TouchableOpacity
          style={styles.productButton}
          onPress={product1ImagePress}
        >
          <Text style={styles.productButtonText}>Learn More➡️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.line2}></View>

      <Text style={styles.title}>
        Build AI-native experiences with our tools and capabilities
      </Text>
      
      <View style={styles.imageTextContainer}>
        <Image
          source={require("../assets/images/product2Image.webp")}
          style={styles.imagesOfPrducts}
        />
        <Text style={styles.productsDownTitle}>Knowledge retrieval</Text>
        <Text style={styles.productsDownText}>
          Give the model access to your data for intelligent retrieval in your
          AI applications.
        </Text>
        <TouchableOpacity
          style={styles.productButton}
          onPress={product2ImagePress}
        >
          <Text style={styles.productButtonText}>Learn More➡️</Text>
        </TouchableOpacity>
      </View> 

      <View style={styles.line2}></View>

      <View style={styles.imageTextContainer}>
        <Image
          source={require("../assets/images/product3Image.webp")}
          style={styles.imagesOfPrducts}
        />
        <Text style={styles.productsDownTitle}>Code interpreter</Text>
        <Text style={styles.productsDownText}>
          Get models to run code iteratively to solve challenging code and math problems, and generate charts.
        </Text>
        <TouchableOpacity
          style={styles.productButton}
          onPress={product3ImagePress}
        >
          <Text style={styles.productButtonText}>Learn More➡️</Text>
        </TouchableOpacity>
      </View> 

      <View style={styles.line2}></View>

      <View style={styles.imageTextContainer}>
        <Image
          source={require("../assets/images/product4Image.webp")}
          style={styles.imagesOfPrducts}
        />
        <Text style={styles.productsDownTitle}>Function calling</Text>
        <Text style={styles.productsDownText}>
          Instruct the model to intelligently interact with your codebase and APIs using custom functions.
        </Text>
        <TouchableOpacity
          style={styles.productButton}
          onPress={product4ImagePress}
        >
          <Text style={styles.productButtonText}>Learn More➡️</Text>
        </TouchableOpacity>
      </View> 

      <View style={styles.line2}></View>

      <View style={styles.imageTextContainer}>
        <Image
          source={require("../assets/images/product5Image.webp")}
          style={styles.imagesOfPrducts}
        />
        <Text style={styles.productsDownTitle}>Vision</Text>
        <Text style={styles.productsDownText}>
          Get the model to understand and answer questions about images using vision capabilities.
        </Text>
        <TouchableOpacity
          style={styles.productButton}
          onPress={product5ImagePress}
        >
          <Text style={styles.productButtonText}>Learn More➡️</Text>
        </TouchableOpacity>
      </View> 

      <View style={styles.line2}></View>

      <View style={styles.imageTextContainer}>
        <Image
          source={require("../assets/images/product6Image.webp")}
          style={styles.imagesOfPrducts}
        />
        <Text style={styles.productsDownTitle}>JSON Mode</Text>
        <Text style={styles.productsDownText}>
          Guarantee JSON outputs from the model when you enable JSON mode.
        </Text>
        <TouchableOpacity
          style={styles.productButton}
          onPress={product6ImagePress}
        >
          <Text style={styles.productButtonText}>Learn More➡️</Text>
        </TouchableOpacity>
      </View> 

      <View style={styles.line2}></View>

      <View style={styles.imageTextContainer}>
        <Image
          source={require("../assets/images/product7Image.webp")}
          style={styles.imagesOfPrducts}
        />
        <Text style={styles.productsDownTitle}>Fine-tuning</Text>
        <Text style={styles.productsDownText}>
          Customize a model’s existing knowledge and behavior for a specific task using text and images via supervised fine-tuning.
        </Text>
        <TouchableOpacity
          style={styles.productButton}
          onPress={product7ImagePress}
        >
          <Text style={styles.productButtonText}>Learn More➡️</Text>
        </TouchableOpacity>
      </View> 

      <View style={styles.line2}></View>

      <Text style={styles.productFinalTitle}>See what you can build in Playground</Text>
      <Text style={styles.productFinalSmallTitle}>Explore our models and APIs in Playground without writing a single line of code.</Text>
      <TouchableOpacity
        style={styles.finalProductButton}
        onPress={productFinalPress}
      >
        <Text style={styles.finalProductButtonText}>Start Building↗️</Text>
      </TouchableOpacity>

      <View style={styles.line2}></View>

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
    backgroundColor: "black",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    textAlign: "center",
    marginHorizontal: 2,
  },
  title2: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    textAlign: "center",
    marginHorizontal: 10,
  },
  learnmoreButton: {
    backgroundColor: "lightblue",
    width: "45%",
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
  learnmoreGreenBtn: {
    backgroundColor: "lightgreen",
    width: "45%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
  },
  smallTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 8,
  },
  apiButton: {
    backgroundColor: "black",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 18,
  },
  apiText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 10,
    textDecorationLine: "underline",
  },
  buttonConainer: {
    flexDirection: "row",
    marginLeft: 50,
  },
  line: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: "100%", 
    marginVertical: 20,
    marginBottom: 26,
  },
  line2: {
    borderBottomColor: "grey", 
    borderBottomWidth: 1, 
    width: "100%",
    marginVertical: 20,
    marginBottom: 26,
  },
  flagShipText: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  gpt4Container: {
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    height: 240,
    margin: 20,
  },
  gpt4MiniContainer: {
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    height: 240,
    margin: 20,
  },
  gpt4Title: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    margin: 7,
    fontWeight: "bold",
  },
  gpt4MiniTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    margin: 7,
    fontWeight: "bold",
  },
  gptTextLines: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  tickMarks: {
    color: "white",
    fontSize: 16,
    marginVertical: 4,
  },
  title2ButtonContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 10,
  },
  title2ButtonText: {
    color: "white",
    fontSize: 17,
    marginHorizontal: 16,
    textDecorationLine: "underline",
  },
  title2FirstButton: {
    backgroundColor: "lightblue",
    borderRadius: 20,
  },
  title2Buttons: {
    color: "white",
  },
  imageTextContainer: {
    borderColor: "white",
    borderWidth: 1,
    height: 460,
    marginHorizontal: 7,
  },
  imagesOfPrducts: {
    height: 300,
    width: 407,
  },
  productsDownTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
  },
  productsDownText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 14,
    marginTop: 7,
  },
  productButton: {
    // backgroundColor: "blue",
    textAlign: "center",
    padding: 6,
    marginTop: 8,
  },
  productButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    textDecorationLine: "underline",
  },
  finalProductButton: {
    backgroundColor: "white",
    width: "45%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
  },
  finalProductButtonText: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  productFinalTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  productFinalSmallTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 7,
    marginVertical: 7
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

export default ProductScreen;
