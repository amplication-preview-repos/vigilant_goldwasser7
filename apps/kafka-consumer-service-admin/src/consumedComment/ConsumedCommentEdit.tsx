import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ConsumedPostTitle } from "../consumedPost/ConsumedPostTitle";

export const ConsumedCommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
