# FattureInCloud API

This project is a wrapper of the API of the service https://fattureincloud.it

More details on the API can be found at the link https://api.fattureincloud.it

### Features
- Customer and supplier management
- Products management
- Documents management (fatture, ordini, ddt, ecc...)

### Install

To install this package, you must run 

**npm run @addo/fatture-in-cloud.api**

### Usage

This package is compatible with TypeScript

**First:** import package

```
import { FattureInCloud } from '@addo/fatture-in-cloud.api';
...
```
**Second:**  Initialize an invoiceInCloud class by entering the appId and appKey

```
...
let service = new FattureInCloud("your-appId", "your-appKey");
...
```

**Third:** Use the API!
```
...
let request: InfoRequest = { appId: 'your-appId', appkey: 'your-appKey' };
service.richiesta.info(request)
	.then((res: InfoResponse) => {
		console.log(res);
	}).catch(err => {
		console.error(err);
	})
...
```


### Help
If you have same question, you can contact us on info@addobusiness.it