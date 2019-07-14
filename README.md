# AMBR Toolbox
JS Toolbox for AMBR Detroit Builds

## 3rd-Party Includes
The toolbox includes the following frameworks by default.
* TODO

## General Usage
The toolbox can be found off the root object -- *ambrtb*
The toolbox classes can ge found in the CLASS namespace -- *ambrtb.CLASS*
The toolbox features are namespaced into their own groups -- *ambrtb.THE_NAMESPACE*

## Features
Following is the list of features included in our toolbox

### Location Services
Location services includes common functionaliy used in our projects around location services such as geolocation.  Location services can be found in *ambrtb.locationServices*.  List of location services features below.

####
* *.getBrowserLatLngPromise* - returns the latitude and longitude based on the browsers geolocation data.  Returns a *ambrtb.CLASS.AMBRTB_ERROR* error on failure.