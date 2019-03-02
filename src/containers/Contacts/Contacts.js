import React, {Component} from 'react';
import {connect} from "react-redux";
import {View, FlatList, TouchableOpacity, Image, Text} from 'react-native';
import {fetchContacts} from "../../store/actions/contactActions";
import styles from "../../../styles";


class Contacts extends Component {

    componentDidMount() {
        this.props.fetchContacts()
    }

    convertToArr = obj => {
        return Object.keys(obj).map(id => {
            return {...obj[id], id};
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.convertToArr(this.props.contacts)}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.contact}>

                            <Image style={styles.contactImg} source={{uri: item.photo}}/>
                            <Text style={styles.contactName}>{item.name}</Text>

                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    contacts: state.contacts,
    error: state.error,
    loading: state.error,
});

const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(fetchContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
