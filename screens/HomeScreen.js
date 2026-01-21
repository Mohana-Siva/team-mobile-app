import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View>
      <Text>Home Page</Text>
      <Button
        title="Go to Profile"
        onPress={() => router.push('/profile')}
      />
    </View>
  );
}
