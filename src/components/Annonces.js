import { StyleSheet, Pressable, Text } from 'react-native';

export default function MonAnnonce(props) {
    return (
        <Pressable style={styles.btnAnnonce}>
            <Text style={styles.title}>{props.user}</Text>
            <Text style={styles.description}>{props.description}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    btnAnnonce: {
        width: '80%',
        marginBottom: '20px',
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: '8px'
    },

    title: {
        fontSize: '15px'
    },

    description: {
        fontSize: '10px'
    }
})