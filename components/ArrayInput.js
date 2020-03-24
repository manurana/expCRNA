import React from "react";
import { View, Button } from "react-native";
import { useFormikContext, FieldArray } from "formik";
import FormTextInput from "./FormTextInput";

const ArrayInput = ({ arrayName, placeholderName, addItem, removeItem }) => {
  const { values } = useFormikContext();

  return (
    <FieldArray
      name={arrayName}
      render={arrayHelpers => (
        <>
          {values[arrayName].map((competitor, index) => (
            <FormTextInput
              key={index}
              fieldName={`${arrayName}[${index}]`}
              placeholder={`${placeholderName} ${index + 1}`}
            />
          ))}
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <View style={{ padding: 10, width: 50 }}>
              <Button onPress={() => removeItem(arrayHelpers)} title="-" />
            </View>
            <View style={{ padding: 10, width: 50 }}>
              <Button onPress={() => addItem(arrayHelpers)} title="+" />
            </View>
          </View>
        </>
      )}
    />
  );
};

export default ArrayInput;
