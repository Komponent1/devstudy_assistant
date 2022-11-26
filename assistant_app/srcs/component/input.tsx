import React, { useRef, useMemo, useCallback } from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

function Input() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
            <Button onPress={() => bottomSheetModalRef.current?.dismiss()} title="close" />
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
