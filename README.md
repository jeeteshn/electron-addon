Project to invoke native C++ Math's pow() function from Electron app. 

We cannot re-use the native nodejs addon as is. There is a need to re-build for making the addon work in electron
Followed these steps
https://github.com/electron/electron/blob/master/docs/tutorial/using-native-node-modules.md#the-easy-way
