import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Divider from "../../Common/Devider/Devider";

export default function PeoplePoint() {
  return (
    <View
      style={{
        marginTop: -5,
        height: 700,
        width: 400,
        backgroundColor: "#fff",
      }}
    >
      <TouchableOpacity>
        <View style={styles.approversContainer}>
          <View style={styles.employee}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.pic}
                source={require("../../Assets/b.jpg")}
              />
            </View>
            <View style={styles.txtContainer}>
              <Text style={{ fontWeight: "500" }}>
                Md. Mahadi Hasan Mridul{" "}
              </Text>
              <Text style={{ color: "gray" }}>Line Manager</Text>
            </View>
          </View>
          <View>
            <Divider />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.approversContainer}>
          <View style={styles.employee}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.pic}
                source={require("../../Assets/k.jpg")}
              />
            </View>
            <View style={styles.txtContainer}>
              <Text style={{ fontWeight: "500" }}>Md. Abu Raihan Khan </Text>
              <Text style={{ color: "gray" }}>Dotted Supervisor</Text>
            </View>
          </View>
          <View>
            <Divider />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.approversContainer}>
          <View style={styles.employee}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.pic}
                source={require("../../Assets/k.jpg")}
              />
            </View>
            <View style={styles.txtContainer}>
              <Text style={{ fontWeight: "500" }}>Md. Abu Raihan Khan </Text>
              <Text style={{ color: "gray" }}>Dotted Supervisor</Text>
            </View>
          </View>
          <View>
            <Divider />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.approversContainer}>
          <View style={styles.employee}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.pic}
                source={require("../../Assets/k.jpg")}
              />
            </View>
            <View style={styles.txtContainer}>
              <Text style={{ fontWeight: "500" }}>Md. Abu Raihan Khan </Text>
              <Text style={{ color: "gray" }}>Dotted Supervisor</Text>
            </View>
          </View>
          <View>
            <Divider />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.approversContainer}>
          <View style={styles.employee}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.pic}
                source={require("../../Assets/k.jpg")}
              />
            </View>
            <View style={styles.txtContainer}>
              <Text style={{ fontWeight: "500" }}>Md. Abu Raihan Khan </Text>
              <Text style={{ color: "gray" }}>
                96-8563-50, Public Relations
              </Text>
              <Text style={{ color: "gray" }}>
                Last sent September 21, 2020
              </Text>
              <Text>Total Point Sent 322 </Text>
            </View>
          </View>
          <View>
            <Divider />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.approversContainer}>
          <View style={styles.employee}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.pic}
                source={require("../../Assets/l.jpg")}
              />
            </View>
            <View style={styles.txtContainer}>
              <Text style={{ fontWeight: "500" }}>Md. Jakaria Hossain </Text>
              <Text style={{ color: "gray" }}>Supervisor</Text>
            </View>
          </View>
          <View>
            <Divider />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.approversContainer}>
          <View style={styles.employee}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.pic}
                source={require("../../Assets/l.jpg")}
              />
            </View>
            <View style={styles.txtContainer}>
              <Text style={{ fontWeight: "500" }}>Md. Jakaria Hossain </Text>
              <Text style={{ color: "gray" }}>Supervisor</Text>
            </View>
          </View>
          <View>
            <Divider />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pic: {
    height: 64,
    width: 64,
    borderRadius: 99,
    borderColor: "#FFF",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
  },
  employee: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 10,
  },
  txtContainer: {
    marginLeft: 16,
  },
});
