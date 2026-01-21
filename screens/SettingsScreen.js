import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function SettingsScreen() {
  return (
    <View>
      <Text>Settings Page</Text>
      <Button
        title="Go to Home"
        onPress={() => router.push('/')}
      />
    </View>
  );
}