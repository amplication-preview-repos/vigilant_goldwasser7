import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ConsumedCommentTitle } from "../consumedComment/ConsumedCommentTitle";

export const ConsumedPostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="consumedComments"
          reference="ConsumedComment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ConsumedCommentTitle} />
        </ReferenceArrayInput>
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="publishedDate" source="publishedDate" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
