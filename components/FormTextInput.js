import React from "react";
import { TextInput, Text, View } from "react-native";
import { Input } from "@ui-kitten/components";
import { useField } from "formik";

const FormTextInput = ({ fieldName, ...props }) => {
  const [field, meta] = useField(fieldName);
  return (
    // <View>
    //   <TextInput
    //     style={{ borderBottomColor: "gray", borderBottomWidth: 1 }}
    //     value={field.value}
    //     onChangeText={field.onChange(fieldName)}
    //     onBlur={field.onBlur(fieldName)}
    //     {...props}
    //   />
    //   {meta.error && meta.touched && (
    //     <Text style={{ color: "red" }}>{meta.error}</Text>
    //   )}
    // </View>
    <Input
      label={props.placeholder}
      value={field.value}
      onChangeText={field.onChange(fieldName)}
      status={meta.error && meta.touched ? "danger" : "basic"}
      caption={meta.error && meta.touched ? meta.error : ""}
      onBlur={field.onBlur(fieldName)}
      {...props}
    />
  );
};

export default FormTextInput;
