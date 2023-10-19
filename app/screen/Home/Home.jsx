import { View, Text, StatusBar, Button } from "react-native";

const Home = ({ navigation }) => {

    const go = () => {

        navigation.navigate('Auth')
    }


  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl text-yellow-400">Hello Page</Text>
      <Button title="GO TO Auth Page" onPress={go}/>
    </View>
  );
};
export default Home;
