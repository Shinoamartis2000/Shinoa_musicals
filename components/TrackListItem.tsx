import { Track } from "@/utils/types";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { useAudioStore } from "@/store/useAudioStore";
import { Ionicons } from "@expo/vector-icons";
import { useMusicStore } from "@/store/useMusicStore";
import { formatDuration } from "@/utils/format";
import { StopPropagation } from "@/utils/stopPropagation";
import { TrackOptions } from "./Options";

export type TrackListItemProps = {
  track: Track;
};

export const TrackListItem = ({ track }: TrackListItemProps) => {
  const playTrack = useAudioStore((state) => state.playTrack);
  const { albums } = useMusicStore();

  const album = albums.find((album) => album.AlbumId === track.AlbumId);

  return (
    <TouchableOpacity
      style={styles.songItem}
      onPress={() => playTrack(track)}>
      <Image
        source={require("@/assets/images/unknown_track.png")}
        style={styles.albumArt}
        resizeMode="cover"
      />

      <View style={styles.textContainer}>
        <Text style={styles.songTitle}>{track.Title}</Text>
        <Text style={styles.albumTitle}>
          {album?.Artist.Name ?? "Unknown Artist"}
        </Text>
      </View>

      <View style={styles.rightSection}>
        <Text style={styles.duration}>{formatDuration(track.Duration)}</Text>
        <StopPropagation>
          <TrackOptions trackId={track.TrackId}>
            <Ionicons
              name="ellipsis-vertical"
              size={18}
              color="#fff"
            />
          </TrackOptions>
        </StopPropagation>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    paddingTop: 10,
  },
  songItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3a2e2e",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  albumArt: {
    width: 56,
    height: 56,
    borderRadius: 8,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  songTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  albumTitle: {
    fontSize: 14,
    color: "#ccc",
    marginTop: 2,
  },
  rightSection: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 40,
  },
  duration: {
    fontSize: 13,
    color: "#aaa",
    marginBottom: 4,
  },
});
