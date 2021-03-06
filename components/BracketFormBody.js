import React, { useEffect } from "react";
import { View, Button, SafeAreaView } from "react-native";
import { useFormikContext } from "formik";
import FormTextInput from "./FormTextInput";
import ArrayInput from "./ArrayInput";

const BracketFormBody = () => {
  const {
    submitForm,
    values,
    isValid,
    isSubmitting,
    validateForm,
  } = useFormikContext();

  // useEffect(() => {
  //   validateForm();
  // }, [validateForm]);

  const submitDisabled = !isValid || isSubmitting;

  const addCompetitor = helpers => {
    helpers.push("");
  };

  const removeCompetitor = helpers => {
    if (values.competitors.length > 2) {
      helpers.pop("");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", paddingTop: 20 }}>
      <View style={{ width: 300 }}>
        <FormTextInput fieldName="name" placeholder="Name" />
        <FormTextInput fieldName="description" placeholder="Description" />
        <ArrayInput
          arrayName="competitors"
          placeholderName="Competitor"
          addItem={helpers => addCompetitor(helpers)}
          removeItem={helpers => removeCompetitor(helpers)}
        />
      </View>
      <Button onPress={submitForm} disabled={submitDisabled} title="Submit" />
    </SafeAreaView>
  );
};

export default BracketFormBody;
