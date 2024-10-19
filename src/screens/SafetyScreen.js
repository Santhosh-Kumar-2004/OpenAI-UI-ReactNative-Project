import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Animated,
  Dimensions,
  Image,
  Linking,
} from "react-native";
import { useState, useRef, useEffect } from "react";
import Video from "react-native-video";
import { Button } from "react-native-elements";

const SafetyScreen = ({ navigation }) => {
  const handlePress1 = () => {
    const url = "https://openai.com/index/openai-o1-system-card/"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL: ", err)
    );
  };

  const handlePress2 = () => {
    const url = "https://openai.com/index/gpt-4o-system-card/"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL: ", err)
    );
  };

  const handlePress3 = () => {
    const url = "https://cdn.openai.com/papers/gpt-4-system-card.pdf"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL: ", err)
    );
  };

  const handlePress4 = () => {
    const url = "https://cdn.openai.com/papers/GPTV_System_Card.pdf"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL: ", err)
    );
  };

  const handlePress5 = () => {
    const url = "https://openai.com/index/dall-e-3-system-card/"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL: ", err)
    );
  };

  const handlePress6 = () => {
    const url = "https://cdn.openai.com/openai-preparedness-framework-beta.pdf"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL: ", err)
    );
  };

  const handlePress7 = () => {
    const url =
      "https://openai.com/index/openai-board-forms-safety-and-security-committee/"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL: ", err)
    );
  };

  const handlePress8 = () => {
    const url = "https://openai.com/safety-standards/"; // Replace with your desired URL
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL: ", err)
    );
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [modalVisible5, setModalVisible5] = useState(false);
  const [modalVisible6, setModalVisible6] = useState(false);
  const [modalVisible7, setModalVisible7] = useState(false);
  const [modalVisible8, setModalVisible8] = useState(false);

  const leftBallAnimation = useRef(new Animated.Value(0)).current;
  const rightBallAnimation = useRef(new Animated.Value(0)).current;

  const jumpAnim = useRef(new Animated.Value(0)).current; // Initial position

  const jumpAnimProfile = useRef(new Animated.Value(0)).current; // Initial position

  const startAnimation = () => {
    // Animate the left ball up and down
    Animated.sequence([
      Animated.timing(leftBallAnimation, {
        toValue: -40, // Move up by 40px
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(leftBallAnimation, {
        toValue: 0, // Move back down
        duration: 500,
        useNativeDriver: true,
      }),
      // Animate the right ball up and down after the left ball
      Animated.timing(rightBallAnimation, {
        toValue: -40, // Move up by 40px
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(rightBallAnimation, {
        toValue: 0, // Move back down
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const startJumpAnimation = () => {
    Animated.sequence([
      Animated.timing(jumpAnim, {
        toValue: -40, // Move up by 40px
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(jumpAnim, {
        toValue: 0, // Move back down
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const startJumpAnimationProfile = () => {
    Animated.sequence([
      Animated.timing(jumpAnimProfile, {
        toValue: -40, // Move up by 40px
        duration: 500, // 1 second up
        useNativeDriver: true,
      }),
      Animated.timing(jumpAnimProfile, {
        toValue: 0, // Move back down
        duration: 500, // 1 second down
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Safety At Every Step</Text>
        <Text style={styles.belowTitle}>
          We believe in AI’s potential to make life better for everyone, which
          means making it safe for everyone.
        </Text>
        {/* <TouchableOpacity 
          style={styles.learnmoreButton} 
          onPress={() => navigation.navigate('OpenAI')}>
          <Text style={styles.learnmoreText}>Learn More↗️</Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.line2}></View>

      {/* CONTAINER 1 */}
      <View style={styles.card1Main}>
        <View style={styles.card1}>
          <Text style={styles.card1Text}>Teach</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.buttonText}>➕</Text>
          </TouchableOpacity>

          {/* This is the content that appears when the TouchableOpacity is pressed */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modal1Text}>Teach</Text>
                <Text style={styles.modal1Title}>Shaping Model Behavior</Text>

                <ScrollView style={styles.modalParaContainer}>
                  <Text style={styles.modal1Para1}>
                    We teach our AI good behavior so it can be both capable and
                    aligned with human values.
                  </Text>
                  <Text style={styles.modal1Para2}>
                    🔴 Model training: At every stage of the model training we
                    apply methods to imbue the principles, policies and human
                    values as suggested in the Model Spec and our safety policy
                    taxonomies, minimizing harmful or biased outputs from the
                    model.
                  </Text>
                  <Text style={styles.modal1Para2}>
                    🔴 System-level guardrails: In addition to teaching our AI
                    models how to be safe, we build additional backup
                    protections which check what people input and what our AI
                    outputs. These protections help improve the robustness of
                    the overall system via a tiered safety stack.
                  </Text>
                  <Text style={styles.modal1Para2}>
                    🔴 sLong-term safety: We invest heavily in researching
                    methods to develop trustworthy AI systems that consistently
                    follow our policies and human intent, even as models become
                    more capable and tasks become more agentic and complex.
                  </Text>
                </ScrollView>

                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.smallCard1}>
          <TouchableOpacity onPress={startAnimation}>
            <View style={styles.ballContainer}>
              <Animated.View
                style={[
                  styles.ball,
                  styles.leftBall,
                  { transform: [{ translateY: leftBallAnimation }] },
                ]}
              />
              <Animated.View
                style={[
                  styles.ball,
                  styles.rightBall,
                  { transform: [{ translateY: rightBallAnimation }] },
                ]}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.smallCard1Text}>
            We start by teaching our AI right from wrong, filtering harmful
            content and responding with empathy.
          </Text>
        </View>
      </View>

      <View style={styles.line2}></View>

      <View style={styles.card1Main}>
        <View style={styles.card1}>
          <Text style={styles.card1Text}>Test</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible2(true)}
          >
            <Text style={styles.buttonText}>➕</Text>
          </TouchableOpacity>

          {/* This is the content that appears when the TouchableOpacity is pressed */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => setModalVisible2(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modal1Text}>Test</Text>
                <Text style={styles.modal1Title}>Red Teaming and Feedback</Text>

                <ScrollView style={styles.modalParaContainer}>
                  <Text style={styles.modal1Para1}>
                    Before we share our AI with everyone, we evaluate its safety
                    by using small groups.
                  </Text>
                  <Text style={styles.modal1Para2}>
                    🔴 Safety evaluations: We run human and automatic
                    evaluations to ensure the model complies with our safety
                    policies.{" "}
                  </Text>
                  <Text style={styles.modal1Para2}>
                    🔴 Red teaming: We collaborate with external experts,
                    trusted partners, and researchers to stress test our model
                    and gather feedback, helping us identify risks and build
                    guardrails to better mitigate harm and resist jailbreaks or
                    adversarial attacks. Learn more about the Red Teaming
                    Network here.
                  </Text>
                  <Text style={styles.modal1Para2}>
                    🔴 Preparedness Framework: Before releasing our AI, we test
                    and evaluate four catastrophic risk areas: Cybersecurity,
                    CBRN (Chemical, Biological, Radiological, Nuclear),
                    Persuasion, and Model Autonomy. If any area is rated as High
                    risk, the model goes back for further training. Learn more
                    about the Preparedness Framework here(opens in a new
                    window).
                  </Text>
                </ScrollView>

                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible2(false)}
                >
                  <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.smallCard2}>
          <TouchableOpacity onPress={startJumpAnimation}>
            <Animated.View
              style={[
                styles.box,
                {
                  transform: [{ translateY: jumpAnim }],
                },
              ]}
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <View key={index} style={styles.line} />
              ))}
            </Animated.View>
          </TouchableOpacity>
          <Text style={styles.smallCard1Text}>
            We conduct internal evaluations and work with experts to test
            real-world scenarios, enhancing our safeguards.
          </Text>
        </View>
      </View>

      <View style={styles.line2}></View>

      <View style={styles.card1Main}>
        <View style={styles.card1}>
          <Text style={styles.card1Text}>Share</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible3(true)}
          >
            <Text style={styles.buttonText}>➕</Text>
          </TouchableOpacity>

          {/* This is the content that appears when the TouchableOpacity is pressed */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible3}
            onRequestClose={() => setModalVisible3(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <Text style={styles.modal1Text}>Share</Text>
                <Text style={styles.modal1Title}>Iterative Deployment</Text>

                <ScrollView style={styles.modalParaContainer}>
                  <Text style={styles.modal1Para1}>
                    Safety can’t be made in a vacuum. We take the decision to
                    share our AI with the public very seriously, gradually
                    releasing it under controlled conditions to minimize risks.{" "}
                  </Text>
                  <Text style={styles.modal1Para2}>
                    🔴 Alpha and Beta releases: Starting with small groups of
                    users lets us learn and improve before we expand to more
                    people.{" "}
                  </Text>
                  <Text style={styles.modal1Para2}>
                    🔴 Continuous monitoring and updating: We use a combination
                    of AI tools(opens in a new window) and people to monitor our
                    AI for misuse or violations of our usage policies, and
                    update accordingly.{" "}
                  </Text>
                  <Text style={styles.modal1Para2}>
                    🔴 Safety committee reviews: For our newest AI models, we
                    ensure the Safety Advisory Group, Deployment Safety Board
                    (DSB) with Microsoft, and the Safety & Security Committee
                    approve that the model is sufficiently safe before releasing
                    it.{" "}
                  </Text>
                </ScrollView>

                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible3(false)}
                >
                  <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.smallCard2}>
          <TouchableOpacity onPress={startJumpAnimationProfile}>
            <Animated.View
              style={[
                styles.profileContainer,
                {
                  transform: [{ translateY: jumpAnimProfile }],
                },
              ]}
            >
              <Image
                source={require("../assets/images/profileImage.png")} // Replace with your image URL
                style={styles.profileImage}
              />
            </Animated.View>
          </TouchableOpacity>
          <Text style={styles.smallCard1Text}>
            We use real-world feedback to help make our AI safer and more
            helpful.
          </Text>
        </View>
      </View>

      <View style={styles.line2}></View>

      <View style={styles.secondContainer}>
        <Text style={styles.secondTitle}>Safety doesn’t stop</Text>
        <Text style={styles.secondTitleText}>
          Building safe AI isn’t one and done. Every day is a chance to make
          things better. And every step helps anticipate, evaluate, and prevent
          risk.
        </Text>

        {/* Circle with dotted border */}
        <View style={styles.circle}>
          {/* Text positioned around the circle */}
          <Text style={styles.textCenter}>TEACH</Text>
          <Text style={styles.textTop}>FITER DATA</Text>
          <Text style={styles.textRight}>VALUES</Text>
          <Text style={styles.textBottom}>OPENAI POLICIES</Text>
          <Text style={styles.textLeft}>HUMAN</Text>
        </View>

        {/* Circle with dotted border */}
        <View style={styles.circle}>
          {/* Text positioned around the circle */}
          <Text style={styles.textCenter}>TEST</Text>
          <Text style={styles.textTop}>RED TEAMING</Text>
          <Text style={styles.textRight}>SYSTEM</Text>
          <Text style={styles.textBottom}>PREPAREDNESS</Text>
          <Text style={styles.textLeft}>CARDS</Text>
        </View>

        {/* Circle with dotted border */}
        <View style={styles.circle}>
          {/* Text positioned around the circle */}
          <Text style={styles.textCenter}>SHARE</Text>
          <Text style={styles.textTop}>SAFETY COMMITTEES</Text>
          <Text style={styles.textRight}>FEEDBACK</Text>
          <Text style={styles.textBottom}>ALPHA / BETA</Text>
          <Text style={styles.textLeft}>GA</Text>
        </View>
      </View>

      <View style={styles.line2}></View>

      <View>
        <Text style={styles.secondTitle}>Leading the way in Safety</Text>
        <Text style={styles.secondTitleText}>
          We collaborate with industry leaders and policymakers on the issues
          that matter most.
        </Text>

        <View style={styles.secondBoxesMain}>
          <View style={styles.secondBoxes}>
            <Image
              source={require("../assets/images/profilePicture2.png")} // Replace with your image URL
              style={styles.profilePicture}
            />
            {/* <Text style={styles.plusIcon}>➕</Text> */}

            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible4(true)}
            >
              <Text style={styles.buttonText}>➕</Text>
            </TouchableOpacity>

            {/* This is the content that appears when the TouchableOpacity is pressed */}
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible4}
              onRequestClose={() => setModalVisible4(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <Text style={styles.modal1Text}>Child Safety</Text>
                  <Text style={styles.modal1Title}>
                    Working together to keep children safe
                  </Text>

                  <ScrollView style={styles.modalParaContainer}>
                    <Text style={styles.modal1Para1}>
                      This issue is important to all of us, that’s why we
                      partner with Amazon, Anthropic, Apple, Civitai, Google,
                      Meta, Metaphyisc, Microsoft, Mistral AI, Stability AI,
                      Thorn and All Tech is Human.{" "}
                    </Text>
                    <Text style={styles.modal1Para2}>
                      ⏺️ Prevent: We are careful what information we use to
                      teach our AI. We avoid and filter child sexual abuse
                      material (CSAM) and child sexual exploitation material
                      (CSEM), and we report any attempts by users to upload it.{" "}
                    </Text>
                    <Text style={styles.modal1Para2}>
                      ⏺️ Protect: We always stay vigilant and observant. We
                      monitor for attempts to produce sexual content involving
                      minors with our AI and block them
                    </Text>
                  </ScrollView>

                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setModalVisible4(false)}
                  >
                    <Text style={styles.buttonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          <Text style={styles.secondBoxTitle}>Child Safety</Text>
          <Text style={styles.secondBoxText}>
            Creating industry-wide standards to protect children.
          </Text>
        </View>

        <View style={styles.secondBoxesMain}>
          <View style={styles.secondBoxes}>
            <Image
              source={require("../assets/images/incognitoPicture.png")} // Replace with your image URL
              style={styles.profilePicture}
            />
            {/* <Text style={styles.plusIcon}>➕</Text> */}

            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible5(true)}
            >
              <Text style={styles.buttonText}>➕</Text>
            </TouchableOpacity>

            {/* This is the content that appears when the TouchableOpacity is pressed */}
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible5}
              onRequestClose={() => setModalVisible5(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <Text style={styles.modal1Text}>Private Information</Text>
                  <Text style={styles.modal1Title}>
                    Your content is under your control
                  </Text>

                  <ScrollView style={styles.modalParaContainer}>
                    <Text style={styles.modal1Para1}>
                      We do not use your content to teach our AI models about
                      private individuals and we do not sell our users' data.
                    </Text>
                    <Text style={styles.modal1Para2}>
                      ⏺️ Refusals: We teach our AI to reject requests for
                      private or sensitive information.
                    </Text>
                    <Text style={styles.modal1Para2}>
                      ⏺️ User choice: ChatGPT users can control whether their
                      content is used to train our AI. When you share your
                      content with us, it helps our models become more accurate,
                      safer and helps to solve your specific problems.
                    </Text>
                  </ScrollView>

                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setModalVisible5(false)}
                  >
                    <Text style={styles.buttonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          <Text style={styles.secondBoxTitle}>Private Information</Text>
          <Text style={styles.secondBoxText}>Protecting people’s privacy.</Text>
        </View>

        <View style={styles.secondBoxesMain}>
          <View style={styles.secondBoxes}>
            <Image
              source={require("../assets/images/securedImage2.png")} // Replace with your image URL
              style={styles.profilePicture}
            />
            {/* <Text style={styles.plusIcon}>➕</Text> */}

            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible6(true)}
            >
              <Text style={styles.buttonText}>➕</Text>
            </TouchableOpacity>

            {/* This is the content that appears when the TouchableOpacity is pressed */}
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible6}
              onRequestClose={() => setModalVisible6(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <Text style={styles.modal1Text}>Deep Fakes</Text>
                  <Text style={styles.modal1Title}>
                    Preventing deception and knowing the source
                  </Text>

                  <ScrollView style={styles.modalParaContainer}>
                    <Text style={styles.modal1Para1}>
                      Deep Fakes, or unauthorized AI-generated recreations,
                      involve deliberate misrepresentation of people and ideas,
                      and are unacceptable.{" "}
                    </Text>
                    <Text style={styles.modal1Para2}>
                      ⏺ Verifying Authenticity: We partner with the Coalition
                      for Content Provenance and Authenticity (C2PA) Steering
                      Committee to help people know where images came from and
                      what made them. This includes adding C2PA metadata to all
                      images created and edited by DALL•E 3 in ChatGPT and
                      OpenAI API. We are also testing the DALL·E 3 Detection
                      Classifier to predict likelihood if an image originated
                      with our AI.{" "}
                    </Text>
                    <Text style={styles.modal1Para2}>
                      ⏺ Preset Voices: ChatGPT is designed to speak in only one
                      of our preset voices
                    </Text>
                    <Text style={styles.modal1Para2}>
                      ⏺ Creative Controls: DALL·E 3 is designed to refuse image
                      requests for a public figure by name.{" "}
                    </Text>
                  </ScrollView>

                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setModalVisible6(false)}
                  >
                    <Text style={styles.buttonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          <Text style={styles.secondBoxTitle}>Deep Fakes</Text>
          <Text style={styles.secondBoxText}>
            Improving transparency in AI content.
          </Text>
        </View>

        <View style={styles.secondBoxesMain}>
          <View style={styles.secondBoxes}>
            <Image
              source={require("../assets/images/weighingScalePicture.png")} // Replace with your image URL
              style={styles.profilePicture}
            />
            {/* <Text style={styles.plusIcon}>➕</Text> */}

            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible7(true)}
            >
              <Text style={styles.buttonText}>➕</Text>
            </TouchableOpacity>

            {/* This is the content that appears when the TouchableOpacity is pressed */}
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible7}
              onRequestClose={() => setModalVisible7(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <Text style={styles.modal1Text}>Bias</Text>
                  <Text style={styles.modal1Title}>
                    Safeguarding against bias
                  </Text>

                  <ScrollView style={styles.modalParaContainer}>
                    <Text style={styles.modal1Para2}>
                      ⏺️ Content moderation and safety filters: We teach our AI
                      and implement filters to help prevent it from generating
                      biased and harmful outputs.{" "}
                    </Text>
                    <Text style={styles.modal1Para2}>
                      ⏺️ Image Stereotyping: Before our AI creates images, a
                      safety layer checks for baseless claims and anything in
                      violation of our current policy.
                    </Text>
                    <Text style={styles.modal1Para2}>
                      ⏺️ Vocal Stereotyping: We teach our AI to avoid
                      reinforcing negative biases. Our AI is designed to be
                      sensitive about accents, refraining from assumptions about
                      a person's origin, intelligence, or race based solely on
                      their voice.
                    </Text>
                    <Text style={styles.modal1Para2}>
                      ⏺️ Research: We conduct ongoing research on bias and
                      fairness in AI.{" "}
                    </Text>
                  </ScrollView>

                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setModalVisible7(false)}
                  >
                    <Text style={styles.buttonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          <Text style={styles.secondBoxTitle}>Bias</Text>
          <Text style={styles.secondBoxText}>
            Rigorously evaluating content to avoid reinforcing biases or
            stereotypes.
          </Text>
        </View>

        <View style={styles.secondBoxesMain}>
          <View style={styles.secondBoxes}>
            <Image
              source={require("../assets/images/electionBoxImage1.png")} // Replace with your image URL
              style={styles.profilePicture}
            />
            {/* <Text style={styles.plusIcon}>➕</Text> */}

            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible8(true)}
            >
              <Text style={styles.buttonText}>➕</Text>
            </TouchableOpacity>

            {/* This is the content that appears when the TouchableOpacity is pressed */}
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible8}
              onRequestClose={() => setModalVisible8(false)}
            >
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <Text style={styles.modal1Text}>Elections</Text>
                  <Text style={styles.modal1Title}>
                    Preventing abuse and adding transparency
                  </Text>

                  <ScrollView style={styles.modalParaContainer}>
                    <Text style={styles.modal1Para1}>
                      We are committed to protecting the integrity of elections
                      and the democratic process.
                    </Text>
                    <Text style={styles.modal1Para2}>
                      ⏺️ Transparency: We joined the Coalition for Content
                      Provenance and Authenticity (C2PA) Steering Committee and
                      began to incorporate C2PA metadata to all images created
                      by DALL•E 3 in ChatGPT and OpenAI API.{" "}
                    </Text>
                    <Text style={styles.modal1Para2}>
                      ⏺️ Access: We work with government agencies and civil
                      societies to direct ChatGPT users to official sources like
                      CanIVote.org and Elections.europa.eu to help answer
                      election related questions, like where to vote.{" "}
                    </Text>
                    <Text style={styles.modal1Para2}>
                      ⏺️ Policy enforcement: We don’t allow people to build
                      applications for political campaigning and lobbying, or to
                      create chatbots that pretend to be real people (e.g.,
                      candidates) or institutions (e.g., local government).{" "}
                    </Text>
                    <Text style={styles.modal1Para2}>
                      ⏺️ Endorsements: We support “Protect Elections from
                      Deceptive AI Act(opens in a new window),” a bi-partisan
                      bill by Senators Klobuchar, Hawley, Coons, Collins,
                      Ricketts, and Bennet seeking to ban deceptive AI-generated
                      media in political ads involving federal candidates, with
                      exceptions to protect First Amendment rights.
                    </Text>
                  </ScrollView>

                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => setModalVisible8(false)}
                  >
                    <Text style={styles.buttonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>
          <Text style={styles.secondBoxTitle}>Elections</Text>
          <Text style={styles.secondBoxText}>
            Partnering with governments to combat disinformation globally.
          </Text>
        </View>
      </View>

      <View style={styles.line2}></View>

      <View>
        <Text style={styles.endTitle}>
          Conversations with OpenAI researchers
        </Text>
        <Text style={styles.endTitleText}>
          Get inside OpenAI with our series that breaks down a range of topics
          around safety and more.
        </Text>
        <Image
          style={styles.endImage}
          source={require("../assets/images/insteadVideo.png")}
        />
      </View>

      <View style={styles.line2}></View>

      <View>
        <Text style={styles.endTitle2}>Go deeper on Safety</Text>

        <View style={styles.endCards}>
          <Text style={styles.endCardsTitle}>OpenAI o1 System Card</Text>
          <Text style={styles.endCardsText}>
            This report outlines the safety work carried out prior to releasing
            OpenAI o1-preview and o1-mini, including external red teaming and
            frontier risk evaluations according to our Preparedness Framework.
          </Text>
          <TouchableOpacity
            style={styles.learnmoreButton}
            onPress={handlePress1}
          >
            <Text style={styles.learnmoreText}>Learn More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.endCards}>
          <Text style={styles.endCardsTitle}>GPT-4o System Card</Text>
          <Text style={styles.endCardsText}>
            This system card takes a detailed look at speech-to-speech while
            also evaluating text and image capabilities.
          </Text>
          <TouchableOpacity
            style={styles.learnmoreButton}
            onPress={handlePress2}
          >
            <Text style={styles.learnmoreText}>Learn More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.endCards}>
          <Text style={styles.endCardsTitle}>GPT-4 System Card</Text>
          <Text style={styles.endCardsText}>
            A system card on the safety challenges in GPT-4 and the
            interventions we implemented to mitigate potential harms.
          </Text>
          <TouchableOpacity
            style={styles.learnmoreButton}
            onPress={handlePress3}
          >
            <Text style={styles.learnmoreText}>Learn More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.endCards}>
          <Text style={styles.endCardsTitle}>GPT-4V(ision) System Card</Text>
          <Text style={styles.endCardsText}>
            This system card dives deeper into the evaluations, preparation, and
            mitigation work done for image inputs.
          </Text>
          <TouchableOpacity
            style={styles.learnmoreButton}
            onPress={handlePress4}
          >
            <Text style={styles.learnmoreText}>Learn More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.endCards}>
          <Text style={styles.endCardsTitle}>DALL-E 3 System Card</Text>
          <Text style={styles.endCardsText}>
            This system card details how we prepared DALL·E 3 for deployment,
            focusing on risk evaluation, red teaming, and mitigation.
          </Text>
          <TouchableOpacity
            style={styles.learnmoreButton}
            onPress={handlePress5}
          >
            <Text style={styles.learnmoreText}>Learn More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.endCards}>
          <Text style={styles.endCardsTitle}>Preparedness Framework</Text>
          <Text style={styles.endCardsText}>
            A document outlining OpenAI’s processes to track, evaluate, and
            protect against catastrophic risks from powerful models.
          </Text>
          <TouchableOpacity
            style={styles.learnmoreButton}
            onPress={handlePress6}
          >
            <Text style={styles.learnmoreText}>Learn More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.endCards}>
          <Text style={styles.endCardsTitle}>Safety and Securit Committee</Text>
          <Text style={styles.endCardsText}>
            This new committee is responsible for making recommendations on
            critical safety and security decisions for all OpenAI projects.
          </Text>
          <TouchableOpacity
            style={styles.learnmoreButton}
            onPress={handlePress7}
          >
            <Text style={styles.learnmoreText}>Learn More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.endCards}>
          <Text style={styles.endCardsTitle}>Product Safety Standards</Text>
          <Text style={styles.endCardsText}>
            A collection of resources about our safety practices across
            development, deployment, and the use of our models.
          </Text>
          <TouchableOpacity
            style={styles.learnmoreButton}
            onPress={handlePress8}
          >
            <Text style={styles.learnmoreText}>Learn More</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 47,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
    textAlign: "center",
  },
  belowTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  learnmoreButton: {
    backgroundColor: "black",
    width: "50%",
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 20,
    marginTop: 30,
  },
  learnmoreText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  line2: {
    borderBottomColor: "grey", // Color of the line
    borderBottomWidth: 1, // Thickness of the line
    width: "100%", // Full width of the container
    marginVertical: 20,
    marginBottom: 26,
  },
  card1Main: {
    backgroundColor: "#1a1815",
    marginHorizontal: 20,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 30,
  },
  card1: {
    backgroundColor: "#1a1815",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
  smallCard1: {
    // borderColor: "white",
    // borderWidth: 1,
    backgroundColor: "#1a1815",
    flex: 1,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  smallCard2: {
    // borderColor: "white",
    // borderWidth: 1,
    backgroundColor: "#1a1815",
    flex: 1,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  card1Text: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  button: {
    backgroundColor: "lightyellow",
    padding: 10,
    borderRadius: 50,
  },
  smallCard1Text: {
    color: "white",
    textAlign: "center",
    marginVertical: 7,
    fontSize: 18,
  },
  ballContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 17,
  },
  ball: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },
  leftBall: {
    backgroundColor: "lightgreen",
  },
  rightBall: {
    backgroundColor: "lightblue",
  },
  buttonText: {
    color: "white",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 370,
    padding: 20,
    backgroundColor: "black",
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 1,
  },
  modal1Text: {
    color: "white",
    fontWeight: "bold",
  },
  modal1Title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  modal1Para1: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  modal1Para2: {
    color: "white",
    fontSize: 14,
    marginHorizontal: 5,
  },
  box: {
    width: Dimensions.get("window").width * 0.6, // 60% of the screen width
    height: 120,
    backgroundColor: "#f0f0f0", // Light background for the box
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
  },
  line: {
    height: 8,
    backgroundColor: "#d3d3d3", // Light gray color for lines
    marginVertical: 4,
    borderRadius: 4,
  },
  profileContainer: {
    width: 100,
    height: 100,
    borderRadius: 50, // Makes the container circular
    overflow: "hidden", // Ensures the image fits within the circular border
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  circle: {
    width: 300,
    height: 300,
    borderRadius: 150, // Makes the view circular
    borderWidth: 2, // Thickness of the border
    borderColor: "green", // Green color for the border
    borderStyle: "dashed", // Makes the border dotted
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 65,
    marginVertical: 10,
  },
  textCenter: {
    color: "white",
    // position: 'absolute',
    top: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  textTop: {
    color: "white",
    position: "absolute",
    top: 10,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  textRight: {
    color: "white",
    position: "absolute",
    right: 10,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    // transform: [{ rotate: '90deg' }],
  },
  textBottom: {
    color: "white",
    position: "absolute",
    bottom: 10,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  textLeft: {
    color: "white",
    position: "absolute",
    left: 10,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    // transform: [{ rotate: '-90deg' }]4
  },
  secondTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold",
  },
  secondTitleText: {
    color: "white",
    textAlign: "center",
    marginVertical: 15,
    fontSize: 17,
    marginHorizontal: 10,
  },
  secondBoxes: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#1a1815",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  secondBoxesMain: {
    backgroundColor: "#1a1815",
    marginHorizontal: 15,
    marginVertical: 7,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 20,
  },
  profilePicture: {
    // backgroundColor: "black",
    height: 50,
    width: 50,
    borderRadius: 55,
  },
  plusIcon: {
    fontSize: 30,
    backgroundColor: "lightyellow",
    borderRadius: 40,
    color: "white",
  },
  secondBoxTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 60,
  },
  secondBoxText: {
    color: "white",
    fontSize: 20,
  },
  endTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  endTitleText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 15,
    marginVertical: 7,
  },
  endImage: {
    height: 250,
    width: 390,
    alignSelf: "center",
  },
  endTitle2: {
    color: "white",
    textAlign: "center",
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 10,
  },
  endCards: {
    backgroundColor: "#1a1815",
    marginHorizontal: 15,
    borderRadius: 30,
    marginVertical: 10,
  },
  endCardsTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 26,
    marginVertical: 7,
    fontWeight: "bold",
  },
  endCardsText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 8,
    marginBottom: 5,
  },
  buttonEnd: {
    backgroundColor: "black", // Button background color
    paddingVertical: 12,
    borderRadius: 10, // Rounded corners
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTextEnd: {
    color: "white", // Text color
    fontSize: 20,
    fontWeight: "bold",
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
    marginHorizontal: 100,
    marginVertical: 40
  },
});

export default SafetyScreen;
