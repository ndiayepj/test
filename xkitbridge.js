//////
//
//  This is sample code to bridge the Thinxtra/Sigfox data to the Oracle IoT Cloud.
//
//////

var port = Number(process.env.PORT || 9905);
var iotHost = process.env.IOTHOST || "<MyIoTServer>";
var iotPort = process.env.IOTPORT || "<MyIoTPort>";
var IoTuser = process.env.IOTUSER || "<MyIoTUsername>";
var IoTpass = process.env.IOTPASS || "<MyIoTPassword>";
var IoTdevicePassword = process.env.IOTDEVPASS || "<MyDefaultDevicePassword>";
console.log("Setting up IoT Server to");

