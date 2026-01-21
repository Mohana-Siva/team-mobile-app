import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

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