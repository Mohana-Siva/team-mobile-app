import { Button, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Page</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
