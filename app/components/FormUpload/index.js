import React from 'react';
import { TextField } from 'material-ui';

class FormUpload extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="FormUpload">
        <TextField
          hintText="Title of image"
        /><br />
        <TextField
          type="file"
          hintText="Title of image"
        /><br />
      </div>
    );
  }
}

export default FormUpload;
