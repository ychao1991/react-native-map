import {PropTypes} from 'react';
import {requireNativeComponent, View} from 'react-native';
var iface={
    name:getName(),
    propTypes:{
        ...View.propTypes
    }
};

module.exports=requireNativeComponent(getName(),iface);

function getName() {
    return "RNEzMapView";
}

