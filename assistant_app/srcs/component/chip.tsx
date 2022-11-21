import { useCallback, useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

type Props = {
  init: boolean;
  onClick?: () => void;
};
function Chip({
  init = false,
  onClick = undefined,
} : Props) {
  const [state, setState] = useState<boolean>(init);
  const onclick = useCallback(() => {
    if (onClick) onClick();
    setState(state => !state);
  }, [state]);

  return (
    <View>
      <TouchableHighlight
        onPress={() => onclick()}
      >
        <Text
          style={{ backgroundColor: state ? 'grey' : 'white' }}
        >
          text
        </Text>
      </TouchableHighlight>
    </View>
  )
};

export default Chip;
