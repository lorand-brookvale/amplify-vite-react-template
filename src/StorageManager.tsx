import { StorageManager } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';

function DefaultStorageManagerExample()  {
  return (
    <StorageManager
      acceptedFileTypes={['*/*']}
      path="files/"
      maxFileCount={10}
      isResumable
    />
  );
}

export default DefaultStorageManagerExample