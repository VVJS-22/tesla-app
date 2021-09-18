import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    carContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "orange"
    },
    header: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10
    },
    headerTitle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center"
    },
    icon: {
        color: "#fff"
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },
    batterySection: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
    },
    batteryImage: {
        height: 26,
        width: 70,
        marginRight: 12
    },
    batteryText: {
        color: "#fff",
        fontSize: 35,
        fontWeight: "bold"
    },
    status: {
        alignItems: "center"
    },
    statusText: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"
    },
    controls: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 175
    },
    controlsButton: {
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 50,
        padding: 18,
        marginLeft: 25
    }
})