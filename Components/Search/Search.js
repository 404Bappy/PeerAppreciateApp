// import React, { useState } from "react";
// import {
//   View,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Modal,
//   TouchableWithoutFeedback,
// } from "react-native";
// import { Icon } from "react-native-elements";
// import { FilterMenu } from "../FilterMenu/FilterMenu";

// const Search = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const handleMenuOpen = () => {
//     setIsMenuOpen(true);
//   };
//   const handleCloseMenu = () => {
//     setIsMenuOpen(false);
//   };
//   return (
//     <View
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         backgroundColor: "#fff",
//       }}
//     >
//       <View style={styles.container}>
//         <TextInput
//           style={styles.input}
//           placeholder="Search Peers"
//           value={0}
//           onChangeText={""}
//           onSubmitEditing={""}
//         />
//       </View>
//       <View
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           padding: 6,
//           alignItems: "flex-end",
//           gap: 10,
//         }}
//       >
//         <View style={{ marginRight: 10, marginTop: 15, overflow: "hidden" }}>
//           <TouchableOpacity style={styles.overlay} onPress={handleMenuOpen}>
//             <Icon name="tune" type="MaterialCommunityIcons" />
//           </TouchableOpacity>
//         </View>

//         {/* {isMenuOpen && <FilterMenu onClose={() => setIsMenuOpen(false)} />} */}
//       </View>

//       <Modal visible={isMenuOpen} transparent={true}>
//         {/* Use TouchableWithoutFeedback to handle overlay touch */}
//         <TouchableWithoutFeedback onPress={handleCloseMenu}>
//           <View style={styles.overlay} />
//         </TouchableWithoutFeedback>
//         <FilterMenu onClose={handleCloseMenu} />
//       </Modal>

//       {/* <Modal
//         visible={isMenuOpen}
//         transparent={true}
//         // animationType="slide" // You can adjust the animation type as needed
//       >
//         <FilterMenu onClose={handleCloseMenu} />
//       </Modal> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     margin: 10,
//     marginTop: 15,
//     padding: 5,
//   },
// });

// export default Search;

import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Icon } from "react-native-elements";
import { FilterMenu } from "../FilterMenu/FilterMenu";

const Search = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
      }}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Search Peers"
          value={0} // You need to provide an actual value here
          onChangeText={""} // You need to provide an actual onChangeText function here
          onSubmitEditing={""} // You need to provide an actual onSubmitEditing function here
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 6,
          alignItems: "flex-end",
          gap: 10,
        }}
      >
        <View style={{ marginRight: 10, marginTop: 15, overflow: "hidden" }}>
          <TouchableOpacity style={styles.overlay} onPress={handleMenuOpen}>
            <Icon name="tune" type="MaterialCommunityIcons" />
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={isMenuOpen} transparent={true}>
        <TouchableWithoutFeedback onPress={handleCloseMenu}>
          <View style={{ flex: 1 }}>
            {/* You can add any other content here */}
            <FilterMenu onClose={handleCloseMenu} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    marginTop: 15,
    padding: 5,
  },
  overlay: {
    padding: 10,
  },
});

export default Search;
