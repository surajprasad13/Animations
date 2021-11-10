import React, {useRef, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Video, {FilterType} from 'react-native-video';

const VideoPlayer = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({
    isPlaying: false,
  });

  return (
    <View style={{flex: 1}}>
      <Text>Video</Text>
      <Video
        ref={video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        style={styles.backgroundVideo}
        controls={true}
        volume={100}
        hideShutterView={false}
        playInBackground={true}
        playWhenInactive={true}
        pictureInPicture={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default VideoPlayer;
