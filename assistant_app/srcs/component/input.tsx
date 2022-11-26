import React, { useMemo, useCallback, forwardRef } from 'react';
import { View, Button,StyleSheet } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';
import { Todo } from '../model';

type InputProps = {
  addTodo: (text: string) => Promise<void>;
  updateTodo: (id: string, text: string) => Promise<void>;
  initTodo?: Todo;
};
const Input = forwardRef<BottomSheetModal, InputProps>(({
    addTodo,
    updateTodo,
    initTodo,
  }: InputProps, ref,
) => {
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const [text, setText] = useState<string>(initTodo ? initTodo.todo : '');
  const update = useCallback(() => {
    if (initTodo) {
      updateTodo(initTodo.id, text).then(() => {
        setText('');
        (ref as any).current?.dismiss();
      });
    } else {
      addTodo(text).then(() => {
        setText('');
        (ref as any).current?.dismiss();
      });
    }
    
  }, [text]);

  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={snapPoints}
    >
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
        />
        <Button onPress={update} title="update" />
      </View>
    </BottomSheetModal>
  );
});

export default Input;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
