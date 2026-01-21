import { View, Text, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View>
      <Text>Profile Page</Text>
      <Button title="Go to Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}
