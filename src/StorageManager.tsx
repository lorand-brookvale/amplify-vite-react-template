import { StorageManager } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider } from '@aws-amplify/ui-react';

const theme = {
    name: 'default-theme',
    tokens: {
      borderWidths: {
        small: '2px',
      },
      components: {
        storagemanager: {         
          dropzone: {   
            borderColor: '{colors.primary.60}',
          },
        },
      },
    },
  };

function DefaultStorageManagerExample()  {
  return (
    <ThemeProvider theme={theme}>
        <StorageManager        
        acceptedFileTypes={['*/*']}
        path="files/"
        maxFileCount={5}
        isResumable
        />
    </ThemeProvider>
  );
}

export default DefaultStorageManagerExample