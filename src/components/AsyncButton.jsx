import React from 'react'
import { HStack, Text, Button, Spinner } from 'native-base'
import { styles } from './styles';
import { ActivityIndicator } from 'react-native';

const AsyncButton = (props) => (
    <Button isDisabled={props.isLoading ? true : false} _disabled={{ bg: '#1a1a1a' }} {...props} style={styles.brutalButton} >
        {
            props.isLoading ? <Spinner size={'lg'} color={'black'} /> : props.text
        }
    </Button>
);

export default AsyncButton