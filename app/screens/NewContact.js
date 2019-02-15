import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';

import colors from '../config/colors';
import CustomTextInput from '../components/TextInput/CustomTextInput';
import PrimaryButton from '../components/Buttons/PrimaryButton'

const fields = [
  { placeholder: "First Name", stateKey: "firstName" },
  { placeholder: "Last Name", stateKey: "lastName" },
  { placeholder: "Email", stateKey: "email", keyboardType: "email-address" },
  { placeholder: "Mobile Phone", stateKey: "mobilePhone" },
  { placeholder: "Home Phone", stateKey: "homePhone" },
  { placeholder: "City", stateKey: "city" },
  { placeholder: "Birthday", stateKey: "birthday" },
  { placeholder: "Registered", stateKey: "registered" },
  { placeholder: "Username", stateKey: "username" }
];

class NewContact extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  onInputChange = (text, stateKey) => {
    const mod = {};
    mod[stateKey] = text;
    this.setState(mod);
  };

  handleSubmit = () => {
    alert("Submit");
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: colors.background }}>
        {
          fields.map((field) => (
            <CustomTextInput
              key={field.stateKey}
              placeholder={field.placeholder}
              onChangeText={text => this.onInputChange(text, field.stateKey)}
              {...field}
            />
          ))
        }
        <View style={{ marginTop: 20 }}>
          <PrimaryButton
            label="Save"
            onPress={() => this.handleSubmit()}
          />
        </View>
      </ScrollView>
    );
  }
}

export default NewContact;