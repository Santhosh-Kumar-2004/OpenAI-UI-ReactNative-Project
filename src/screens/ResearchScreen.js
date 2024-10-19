import React from "react";
import { View, 
  Text,
  StyleSheet, 
  TouchableOpacity,
  ScrollView ,
  Linking,
  Image
} from "react-native";

const ResearchScreen = ({ navigation }) => {

  const overviewPress = () => {
    const url = 'https://openai.com/news/research/';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  const safetyOverPress = () => {
    const url = 'https://openai.com/safety/';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  const image13Press = () => {
    const url = 'https://openai.com/index/instruction-following/';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  const image15Press = () => {
    const url = 'https://openai.com/index/language-models-are-few-shot-learners/';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  const image16Press = () => {
    const url = 'https://openai.com/index/hierarchical-text-conditional-image-generation-with-clip-latents/';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  const image17Press = () => {
    const url = 'https://openai.com/index/dall-e/';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  const image18Press = () => {
    const url = 'https://openai.com/index/clip/';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  const endResearchButtonPress = () => {
    const url = 'https://openai.com/careers/search/';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  const kernelEngineerPress = () => {
    const url = 'https://jobs.ashbyhq.com/openai/f0f89622-7041-4a1e-a8c2-4c7e673569e1/application';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  const designEngineerPress = () => {
    const url = 'https://jobs.ashbyhq.com/openai/c575a55d-bccb-407d-8950-e1e2651703f3/application';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  const researchEngineerPress = () => {
    const url = 'https://jobs.ashbyhq.com/openai/240d459b-696d-43eb-8497-fab3e56ecd9b/application';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  const researchScientistPress = () => {
    const url = 'https://jobs.ashbyhq.com/openai/5f0c6579-0bfb-4a06-8a43-1dd371499e10/application';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  const allResearhPress = () => {
    const url = 'https://openai.com/news/research/';  // Replace with your desired URL
    Linking.openURL(url)
      .catch((err) => console.error('Error opening URL: ', err));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Pioneering research on the path to AGI!</Text>
      <Text style={styles.smallTitle}>We believe our research will eventually lead to artificial general intelligence, a system that can solve human-level problems. Building safe and beneficial AGI is our mission.</Text>
      <View style={styles.buttonConainer}>
        <TouchableOpacity
          style={styles.learnmoreButton}
          onPress={overviewPress}
        >
          <Text style={styles.learnmoreText}>View Research index↗️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.apiButton}
          onPress={safetyOverPress}
        >
          <Text style={styles.apiText}>Learn about safety</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/research_screen1.webp")}
          style={styles.teamImage2}
        />
      </View>

      <View style={styles.line} />

      <Text style={styles.belowImgPara}>“Safely aligning powerful AI systems is one of the most important unsolved problems for our mission. Techniques like learning from human feedback are helping us get closer, and we are actively researching new techniques to help us fill the gaps.”</Text>
      <Text style={styles.belowImgName}>Josh Achiam, Researcher at OpenAI</Text>

      <View style={styles.line} />

      <Text style={styles.belowImgHead1}>Focus areas</Text>
      <Text style={styles.belowImgText1}>We build our generative models using a technology called deep learning, which leverages large amounts of data to train an AI system to perform a task.</Text>

      <View style={styles.line} />

      <Text style={styles.belowImgHead1}>Text</Text>
      <Text style={styles.belowImgText1}>Our text models are advanced language processing tools that can generate, classify, and summarize text with high levels of coherence and accuracy.</Text>

      <View style={styles.imageContainer}>
        <Text style={styles.image13Text}>Aligning language model to follow the instructions👇</Text>
        <TouchableOpacity
          style={styles.learnmoreButton}
          onPress={image13Press}
        >
          <Image
            source={require("../assets/images/image-13.webp")}
            style={styles.image13}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.line2}></View>

      <View style={styles.imageContainer}>
        <Text style={styles.image13Text}>Aligning language model to follow the instructions👇</Text>
        <TouchableOpacity
          style={styles.learnmoreButton}
          onPress={image15Press}
        >
          <Image
            source={require("../assets/images/image-15.webp")}
            style={styles.image13}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.line} />

      <Text style={styles.belowImgHead1}>Image</Text>
      <Text style={styles.belowImgText1}>Our research on generative modeling for images has led to representation models like CLIP, which makes a map between text and images that an AI can read, and DALL-E, a tool for creating vivid images from text descriptions.</Text>

      <View style={styles.imageContainer}>
        <Text style={styles.image13Text}>Hierarchical text-conditional image generation with CLIP latents👇</Text>
        <TouchableOpacity
          style={styles.learnmoreButton}
          onPress={image16Press}
        >
          <Image
            source={require("../assets/images/image-16.jpg")}
            style={styles.image13}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.line2} />

      <View style={styles.imageContainer}>
        <Text style={styles.image13Text}>DALL-E: Creating images from text👇</Text>
        <TouchableOpacity
          style={styles.learnmoreButton}
          onPress={image17Press}
        >
          <Image
            source={require("../assets/images/image-17.webp")}
            style={styles.image13}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.line2} />

      <View style={styles.imageContainer}>
        <Text style={styles.image13Text}>CLIP: Connecting image and Text👇</Text>
        <TouchableOpacity
          style={styles.learnmoreButton}
          onPress={image18Press}
        >
          <Image
            source={require("../assets/images/image-18.webp")}
            style={styles.image13}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.line}></View>

      <View style={styles.endResearchContainer}>
        <Text style={styles.endResearchHeader}>Featured Roles</Text>
        <Text style={styles.endResearchText}>We are actively seeking talented individuals to join our team. Explore featured roles or view all open roles.</Text>
        <TouchableOpacity
          style={styles.endResearchButton}
          onPress={endResearchButtonPress}
        >
          <Text style={styles.learnmoreText}>View All Careers</Text>
        </TouchableOpacity>
      </View>

        <View style={styles.endCheckBoxContainerMain}>

          <View style={styles.endCheckBoxContainer}>
            <Text style={styles.endCheckBoxHead}>GPU Kernel Engineer</Text>
            <Text style={styles.endCheckBoxMid}>San Francisco</Text>
            {/* <Text style={styles.endCheckBoxButton}>Apply Now</Text> */}
            <TouchableOpacity
              style={styles.apiButton}
              onPress={kernelEngineerPress}
            >
              <Text style={styles.endCheckBoxButton}>Apply Now➡️</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.endCheckBoxContainer}>
            <Text style={styles.endCheckBoxHead}>HW/SW Co-Design Eng.</Text>
            <Text style={styles.endCheckBoxMid}>San Francisco</Text>
            {/* <Text style={styles.endCheckBoxButton}>Apply Now</Text> */}
            <TouchableOpacity
              style={styles.apiButton}
              onPress={designEngineerPress}
            >
              <Text style={styles.endCheckBoxButton}>Apply Now➡️</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.endCheckBoxContainer}>
            <Text style={styles.endCheckBoxHead}>Research Engineer</Text>
            <Text style={styles.endCheckBoxMid}>San Francisco</Text>
            {/* <Text style={styles.endCheckBoxButton}>Apply Now</Text> */}
            <TouchableOpacity
              style={styles.apiButton}
              onPress={researchEngineerPress}
            >
              <Text style={styles.endCheckBoxButton}>Apply Now➡️</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.endCheckBoxContainer}>
            <Text style={styles.endCheckBoxHead}>Research Scientist</Text>
            <Text style={styles.endCheckBoxMid}>San Francisco</Text>
            {/* <Text style={styles.endCheckBoxButton}>Apply Now</Text> */}
            <TouchableOpacity
              style={styles.apiButton}
              onPress={researchScientistPress}
            >
              <Text style={styles.endCheckBoxButton}>Apply Now➡️</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.line2}></View>

        <View style={styles.researchBaseContainer}>
          <Text style={styles.researchBaseText}>Explore all research</Text>
          <TouchableOpacity
            style={styles.endResearchButton}
            onPress={allResearhPress}
          >
            <Text style={styles.researchBaseButton}>View All Careers</Text>
          </TouchableOpacity>
        </View>

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
    marginBottom: 15,
    color: "white",
    textAlign: "center",
    paddingHorizontal: 5,
    marginHorizontal: 6
  },
  smallTitle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingHorizontal: 5,
    marginHorizontal: 6
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
  apiButton: {
    backgroundColor: "black",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 18
  },
  apiText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
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
    marginHorizontal: 15,
    backgroundColor: "black",
    marginTop: 20,
  },
  teamImage2: {                 
    resizeMode: 'contain',  
    height: 360,
    width: 360,
    alignSelf: "center"     
  },
  line: {
    borderBottomColor: 'white',  // Color of the line
    borderBottomWidth: 1,       // Thickness of the line
    width: '100%',              // Full width of the container
    marginVertical: 20,    
    marginBottom: 26
  },
  belowImgPara: {
    color: "white",
    textAlign: "center",
    margin: 7,
    fontSize: 20,
    fontWeight: "bold"
  },
  belowImgName: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 30
  },
  belowImgHead1: {
    color: "white",
    textAlign: "center",
    margin: 7,
    fontSize: 30,
    fontWeight: "bold"
  },
  belowImgText1: {
    color: "white",
    textAlign: "center",
    margin: 7,
    fontSize: 16,
    marginHorizontal: 20,
    marginVertical: 10
  },
  image13: {               
    resizeMode: 'contain',  
    height: 360,
    width: 360,
    alignSelf: "center"     
  },
  image13Text: {
    color: "white",
    textAlign: "center",
    margin: 7,
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  line2: {
    borderBottomColor: 'grey',  // Color of the line
    borderBottomWidth: 1,       // Thickness of the line
    width: '100%',              // Full width of the container
    marginVertical: 20,    
    marginBottom: 26
  },
  endResearchHeader: {
    color: "white",
    fontSize: 34,
    textAlign: "center",
    fontWeight: "bold"
  },
  endResearchText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginTop: 10
  },
  endResearchButton: {
    backgroundColor: "white",
    width: "50%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
  },
  endCheckBoxContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 2,
    alignItems: "center",
  },
  endCheckBoxContainerMain: {
    borderWidth: 2,
    borderColor: "white",
    marginHorizontal: 10,
  },
  endCheckBoxHead: {
    color: "white",
    textAlign: "left",
    fontSize: 16,
    marginHorizontal: 10
  },
  endCheckBoxMid: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
    marginHorizontal: 10
  },
  endCheckBoxButton: {
    color: "white",
    fontSize: 16,
    textAlign: "right",
    textDecorationLine: "underline"
  },
  researchBaseContainer: {
    borderWidth: 2,
    borderColor: "white",
    height: 340,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  researchBaseText: {
    color: "white",
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center"
  },
  researchBaseButton: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 6,
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

export default ResearchScreen;
