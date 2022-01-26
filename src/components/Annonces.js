import { StyleSheet, Pressable, Text } from 'react-native';

export default function MonAnnonce(props) {
    return (
        <Pressable>
            <Text style={styles.title}>{props.user}</Text>
            <Text style={styles.description}>{props.description}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnAnnonce: {
        width: '80%',
        color: '#000',
        backgroundColor: '#fff',
        borderColor: '#000',
    },

    title: {
        fontSize: '15px'
    },

    description: {
        fontSize: '10px'
    }
})