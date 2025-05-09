import { Stack } from "expo-router";

export default function AlbumLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(add-album)"
        options={{
          title: "Add Album",
          headerStyle: {
            backgroundColor: "#1E1E1E",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name="(edit-album)"
        options={{
          title: "Edit Album",
          headerStyle: {
            backgroundColor: "#1E1E1E",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 18,
          },
        }}
      />
    </Stack>
  );
}
