import {
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#1a1a1a",
        flex: 1,
        marginTop: StatusBar.currentHeight,
      }}
    >
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            padding: 15,

            justifyContent: "space-between",
            backgroundColor: "#333333",
            borderRadius: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 5,
            }}
          >
            <Ionicons name="location-sharp" size={35} color="white" />
            <View
              style={{
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  color: "grey",
                  fontSize: 15,
                }}
              >
                Location
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  color: "white",
                }}
              >
                KNUST, Kumasi Ghana
              </Text>
            </View>
          </View>
          <View
            style={{
              alignContent: "flex-end",
            }}
          >
            <FontAwesome name="bell-o" size={28} color="white" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <ImageBackground
            source={require("../CarProject/img/redcar.jpg")}
            alt="car"
            style={{
              objectFit: "contain",
              width: ScreenWidth * 0.92,
              height: ScreenHeight * 0.25,
              borderRadius: 10,
            }}
            imageStyle={{ borderRadius: 20 }}
          >
            <Text
              style={{
                color: "grey",
                padding: 10,
                fontSize: 20,
              }}
            >
              Hello, Willard
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 30,
                textAlign: "auto",
                padding: 10,
              }}
            >
              Fresh Start Your{" "}
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 30,
                textAlign: "auto",
                padding: 10,
              }}
            >
              Journey
            </Text>
          </ImageBackground>
        </View>
        <ScrollView horizontal>
          <View
            style={{
              padding: 15,
              flexDirection: "row",
              gap: 15,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                backgroundColor: "#333333",
                borderRadius: 10,
                padding: 10,
              }}
            >
              <FontAwesome name="car" size={30} color="white" />
              <Text style={{ color: "white", fontSize: 20 }}>Cars</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                backgroundColor: "#333333",
                borderRadius: 10,
                padding: 10,
              }}
            >
              <FontAwesome5 name="bus-alt" size={30} color="white" />
              <Text style={{ color: "white", fontSize: 20 }}>Bus</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                backgroundColor: "#333333",
                borderRadius: 10,
                padding: 10,
              }}
            >
              <FontAwesome6 name="gas-pump" size={30} color="white" />
              <Text style={{ color: "white", fontSize: 20 }}>Gas</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                backgroundColor: "#333333",
                borderRadius: 10,
                padding: 10,
              }}
            >
              <Ionicons name="boat-sharp" size={24} color="white" />
              <Text style={{ color: "white", fontSize: 20 }}>Boat</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                backgroundColor: "#333333",
                borderRadius: 10,
                padding: 10,
              }}
            >
              <FontAwesome6 name="motorcycle" size={24} color="white" />
              <Text style={{ color: "white", fontSize: 20 }}>Bike</Text>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <Text style={{ color: "white", fontSize: 25 }}>Recent Place</Text>
          <Text style={{ color: "grey", fontSize: 15 }}>See More</Text>
        </View>
        <ScrollView horizontal>
          <View
            style={{
              padding: 15,
              flexDirection: "row",
              gap: 15,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                gap: 10,
                backgroundColor: "#333333",
                borderRadius: 10,
                padding: 10,

                width: 140,
              }}
            >
              <Image
                height={150}
                width={120}
                source={{
                  uri: "https://www.superbcrew.com/wp-content/uploads/2022/07/Impact-of-parking-spaces-underground-garage.jpg",
                }}
              />
              <Text style={{ color: "white", fontSize: 18 }}>
                Casely Hayford Parking Space
              </Text>
              <Text style={{ color: "grey", fontSize: 14 }}>
                Academic Block, KNUST
              </Text>
            </View>

            <View
              style={{
                flexDirection: "column",
                gap: 10,
                backgroundColor: "#333333",
                borderRadius: 10,
                padding: 10,

                width: 140,
              }}
            >
              <Image
                height={150}
                width={120}
                source={{
                  uri: "https://as1.ftcdn.net/v2/jpg/04/90/85/66/1000_F_490856687_4twGZ1PNCYDFsgdpO78jdLZOiz6qO5nQ.jpg",
                }}
              />
              <Text style={{ color: "white", fontSize: 18 }}>
                Allotey Parking Space
              </Text>
              <Text style={{ color: "grey", fontSize: 14 }}>
                College of Science, KNUST
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                gap: 10,
                backgroundColor: "#333333",
                borderRadius: 10,
                padding: 10,

                width: 140,
              }}
            >
              <Image
                height={150}
                width={120}
                source={{
                  uri: "https://img.freepik.com/premium-photo/interior-parking-garage-with-car-vacant-parking-lot-parking-building_1112-2835.jpg",
                }}
              />
              <Text style={{ color: "white", fontSize: 18 }}>
                Saarah Mensah Parking Space
              </Text>
              <Text style={{ color: "grey", fontSize: 14 }}>
                College of Engineering, KNUST
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                gap: 10,
                backgroundColor: "#333333",
                borderRadius: 10,
                padding: 10,

                width: 140,
              }}
            >
              <Image
                height={150}
                width={120}
                source={{
                  uri: "https://i.pinimg.com/originals/14/82/d0/1482d0d25019514d59990879e7076d99.jpg",
                }}
              />
              <Text style={{ color: "white", fontSize: 18 }}>
                Prempeh III Parking Space
              </Text>
              <Text style={{ color: "grey", fontSize: 14 }}>
                Library Vicinty, KNUST
              </Text>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <Text style={{ color: "white", fontSize: 25 }}>
            Last Parking Space
          </Text>
          <Text style={{ color: "grey", fontSize: 15 }}>See More</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            backgroundColor: "#333333",
            borderRadius: 10,
            padding: 10,
            justifyContent: "space-between",
            height: 100,
          }}
        >
          <View
            style={{
              flexDirection: "row",

              gap: 10,
            }}
          >
            <Image
              height={95}
              width={120}
              source={{
                uri: "https://www.bft-international.com/imgs/1/3/6/3/6/9/9/18-13-OB_StoPox_590_EP_Ulm_02_G-8049fddf0f94833f.jpeg",
              }}
            />
            <View
              style={{
                flexDirection: "column",
                gap: 15,
              }}
            >
              <Text style={{ color: "white", fontSize: 16 }}>
                Brunei Parking Space
              </Text>
              <Text style={{ color: "grey", fontSize: 12 }}>
                Brunei Complex, KNUST
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Feather name="more-horizontal" size={24} color="white" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const ScreenHeight = Dimensions.get("screen").height;
const ScreenWidth = Dimensions.get("screen").width;
