import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_upload';
import ImageFileInput from './components/image_File_input/image_File_input';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = props => (<ImageFileInput {...props} imageUploader={imageUploader}/>)


ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
