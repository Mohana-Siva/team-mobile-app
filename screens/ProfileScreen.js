import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function ProfileScreen() {
  return (
    <View>
      <Text>Profile Page</Text>
      <Button
        title="Go to Settings"
        onPress={() => router.push('/settings')}
      />
    </View>
  );
}
