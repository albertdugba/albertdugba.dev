


# Easy React File Uploads with Filestack 



File uploads in react applications can sometimes be a little complex.
[**File Stack**](https://www.filestack.com/) is a service that provides a simple api to upload file in any application, from web to mobile. 

Lets begin uploading files with filestack today.
Head over to  [**filestack.com**](https://www.filestack.com/) and create an account.

After signing up, it should redirect you to the dashboard.
At the top right corner is your `api key`.


Start by installing the `filestack` npm package:
```js
yarn add filestack-react
// or
npm install --save filestack-react
```

Inside your `[App.js]` component, copy below this code and paste it inside.

```js
import React from 'react'
import { client } from 'filestack-react'


const App = () => {
  const filePickerOptions = {
    accept: 'image/*',
    maxSize: 1024 * 1024,
    maxFiles: 1,
    onFileUploadFinished: this.setcanvasBG,
  };

  const handleFilePicker = () => {
    //  logic for file
  };

  return <div>....</div>;
};



```

Lets create a function to trigger the api on click event

```js
// App.js
import { useState,useEffect } from 'react'
import axios from 'axios'

const App = () => {

 const [file, setFile] = useState(null)

  const filePickerOptions = {
    accept: 'image/*',
    maxSize: 1024 * 1024,
    maxFiles: 1,
    onFileUploadFinished: this.setcanvasBG,
    onUploadDone: (file) => setFile(file),
  };

  console.log(file)

  const handleFilePicker = () => {
    const filestackApikey = '****'; //insert here with your own api key
    const filestack = client.init(filestackApikey, filePickerOptions);

    const picker = filestack.picker(filePickerOptions);
    picker.open();
  };

  return (
    <div>
      <button onClick={() => handleFilePicker()}>Click to upload file</button>
    </div>
  );
};


```
If you've done everything right, you should see a filestack modal like this

![File stack](https://portfolioimagefiles.s3.amazonaws.com/blog/filestack.png)


After selecting your file, click the upload button.

For each file uploaded, an object is created with the file details and metadata

```js
{
  filename: 'freepik--Screen--inject-6.png';
  handle: 'hJLzunWESXaNLBmh2Xu7';
  mimetype: 'image/png';
  originalPath: 'freepik--Screen--inject-6.png';
  size: 8484;
  source: 'local_file_system';
  url: 'https://cdn.filestackcontent.com/hJLzunWESXaNLBmh2Xu7';
  uploadId: '1B40nV7oWvx74mMG';
  originalFile: Object;
  name: 'freepik--Screen--inject-6.png';
  type: 'image/png';
  size: 8484;
  status: 'Stored';
}

```

We can go a little bit further and add the file to a custom server like this:

```js

useEffect(() => {
    fetch("https://httpbin.org/post", {
      method: "POST",
      body: JSON.stringify(file),
      headers: { "Content-type": "application/json" }
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }, [file]);

```


There is a lot more to `filestack` api than just uploading. You can crop images, select images from the internet and a lot more. Kindly check their [**documentation**](https://www.filestack.com/docs/uploads/pickers/web/)



## Demo
You can find a working demo here on [**codesanbox**](https://codesandbox.io/s/file-uploads-with-react-filestack-ogvuw?file=/src/App.js)


## Resources
 - [Filestack](https://www.filestack.com/docs/uploads/pickers/web/)


### Thank you for reading up to this point.Hope you enjoyed it.😊




