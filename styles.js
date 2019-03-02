import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    contact: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#f0f0f0'
    },
    contactImg: {
        width: 100,
        height: 100,
        marginRight: 10,
    },
    contactName: {
        fontSize: 20
    },
    modal: {
        flex: 1,
        paddingTop: 30,
        justifyContent: 'space-between',
    },
    modalContact: {
        alignItems: 'center'
    },
    modalImg: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
    modalContactText: {
        fontSize: 20,
        marginBottom: 5
    }
});
