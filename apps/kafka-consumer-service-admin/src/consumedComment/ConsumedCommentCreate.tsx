import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ConsumedPostTitle } from "../consumedPost/ConsumedPostTitle";

export const ConsumedCommentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="consumedPost.id"
          reference="ConsumedPost"
          label="ConsumedPost"
        >
          <SelectInput optionText={ConsumedPostTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
      </SimpleForm>
    </Create>
  );
};
